'use server';
/**
 * @fileOverview Un flujo de Genkit para generar automáticamente tarjetas de actualización de portafolio a partir de datos de actividad.
 *
 * - automatedPortfolioUpdate - Función que genera una tarjeta de actualización.
 * - AutomatedPortfolioUpdateInput - Tipo de entrada para la función.
 * - AutomatedPortfolioUpdateOutput - Tipo de salida para la función.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AutomatedPortfolioUpdateInputSchema = z.object({
  repoName: z.string().describe('El nombre del repositorio de GitHub.'),
  repoUrl: z.string().url().describe('La URL del repositorio de GitHub.'),
  commitMessage: z.string().describe('El mensaje del último commit.'),
  commitUrl: z.string().url().describe('La URL del último commit.'),
  commitDate: z.string().datetime().describe('La fecha y hora del commit en formato ISO 8601.'),
});
export type AutomatedPortfolioUpdateInput = z.infer<typeof AutomatedPortfolioUpdateInputSchema>;

const AutomatedPortfolioUpdateOutputSchema = z.object({
  title: z.string().describe('Un título conciso y atractivo para la tarjeta, resumiendo la actividad en español.'),
  description: z.string().describe('Una descripción detallada pero breve de la actividad en español, adecuada para un portafolio.'),
  link: z.string().url().describe('URL directa a la actividad (commit o pull request).'),
  category: z.enum(['Feature', 'Bug Fix', 'Refactor', 'Documentation', 'Chore', 'Other']).describe('Categoría que mejor describe el tipo de actualización.'),
  displayDate: z.string().describe('La fecha formateada en español (ej. "27 de octubre de 2023").'),
});
export type AutomatedPortfolioUpdateOutput = z.infer<typeof AutomatedPortfolioUpdateOutputSchema>;

export async function automatedPortfolioUpdate(input: AutomatedPortfolioUpdateInput): Promise<AutomatedPortfolioUpdateOutput> {
  return automatedPortfolioUpdateFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioUpdateCardPrompt',
  input: { schema: AutomatedPortfolioUpdateInputSchema },
  output: { schema: AutomatedPortfolioUpdateOutputSchema },
  prompt: `Eres un asistente de IA encargado de generar tarjetas de actualización profesionales para un portafolio a partir de actividad de GitHub.
Tu objetivo es transformar la información técnica en un mensaje atractivo y fácil de entender en ESPAÑOL.

Basado en la siguiente actividad, crea una tarjeta:

Nombre del Repositorio: {{{repoName}}}
URL del Repositorio: {{{repoUrl}}}
Mensaje del Commit: {{{commitMessage}}}
URL del Commit: {{{commitUrl}}}
Fecha del Commit: {{{commitDate}}}

Instrucciones:
1.  **Título**: Crea un título llamativo en ESPAÑOL que resuma la actualización. Comienza con un verbo de acción.
2.  **Descripción**: Escribe una descripción concisa y profesional en ESPAÑOL. Enfócate en el impacto o el aspecto técnico sin ser excesivamente denso.
3.  **Link**: Usa la 'URL del Commit' directamente.
4.  **Categoría**: Analiza el mensaje y asigna una: 'Feature', 'Bug Fix', 'Refactor', 'Documentation', 'Chore', u 'Other'.
5.  **Fecha de Visualización**: Convierte la fecha a formato humano en ESPAÑOL (ej. "15 de Febrero, 2024").

TODA LA SALIDA DE TEXTO DEBE ESTAR EN ESPAÑOL.
`,
});

const automatedPortfolioUpdateFlow = ai.defineFlow(
  {
    name: 'automatedPortfolioUpdateFlow',
    inputSchema: AutomatedPortfolioUpdateInputSchema,
    outputSchema: AutomatedPortfolioUpdateOutputSchema,
  },
  async (input) => {
    const maxRetries = 3;
    let lastError;

    for (let i = 0; i < maxRetries; i++) {
      try {
        const { output } = await prompt(input);
        if (!output) {
          throw new Error('Error al generar la tarjeta de actualización.');
        }
        return output;
      } catch (error: any) {
        lastError = error;
        const isRateLimit = error.message?.includes('429') || 
                          error.message?.includes('RESOURCE_EXHAUSTED') ||
                          error.status === 429;
        
        if (isRateLimit && i < maxRetries - 1) {
          const delay = Math.pow(2, i + 1) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
        throw error;
      }
    }
    throw lastError;
  }
);
