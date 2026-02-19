'use server';
/**
 * @fileOverview A Genkit flow for automatically generating portfolio update cards from activity data.
 *
 * - automatedPortfolioUpdate - A function that generates a portfolio update card.
 * - AutomatedPortfolioUpdateInput - The input type for the automatedPortfolioUpdate function.
 * - AutomatedPortfolioUpdateOutput - The return type for the automatedPortfolioUpdate function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AutomatedPortfolioUpdateInputSchema = z.object({
  repoName: z.string().describe('The name of the GitHub repository.'),
  repoUrl: z.string().url().describe('The URL of the GitHub repository.'),
  commitMessage: z.string().describe('The message of the latest commit.'),
  commitUrl: z.string().url().describe('The URL of the latest commit.'),
  commitDate: z.string().datetime().describe('The date and time of the commit in ISO 8601 format.'),
});
export type AutomatedPortfolioUpdateInput = z.infer<typeof AutomatedPortfolioUpdateInputSchema>;

const AutomatedPortfolioUpdateOutputSchema = z.object({
  title: z.string().describe('A concise and engaging title for the portfolio update card, summarizing the activity.'),
  description: z.string().describe('A detailed but brief description of the activity, suitable for a portfolio.'),
  link: z.string().url().describe('A direct URL to the relevant activity (e.g., the commit or pull request).'),
  category: z.enum(['Feature', 'Bug Fix', 'Refactor', 'Documentation', 'Chore', 'Other']).describe('A category that best describes the type of update.'),
  displayDate: z.string().describe('The formatted date of the activity, suitable for display on a portfolio (e.g., "October 27, 2023").'),
});
export type AutomatedPortfolioUpdateOutput = z.infer<typeof AutomatedPortfolioUpdateOutputSchema>;

export async function automatedPortfolioUpdate(input: AutomatedPortfolioUpdateInput): Promise<AutomatedPortfolioUpdateOutput> {
  return automatedPortfolioUpdateFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioUpdateCardPrompt',
  input: { schema: AutomatedPortfolioUpdateInputSchema },
  output: { schema: AutomatedPortfolioUpdateOutputSchema },
  prompt: `You are an AI assistant tasked with generating professional portfolio update cards from developer activity data.
Your goal is to transform raw commit information into an engaging and easy-to-understand update for a freelance portfolio.

Based on the following GitHub activity, create a portfolio update card:

Repository Name: {{{repoName}}}
Repository URL: {{{repoUrl}}}
Commit Message: {{{commitMessage}}}
Commit URL: {{{commitUrl}}}
Commit Date: {{{commitDate}}}

Instructions:
1.  **Title**: Create a compelling title that summarizes the update. Start with an action verb or a clear statement of what was done.
2.  **Description**: Write a concise, professional description of the update. Focus on the impact or the technical aspect without being overly technical. Explain what was added, changed, or fixed.
3.  **Link**: Use the provided 'Commit URL' directly as the link.
4.  **Category**: Analyze the 'Commit Message' and assign the most appropriate category from 'Feature', 'Bug Fix', 'Refactor', 'Documentation', 'Chore', or 'Other'. If the commit message suggests new functionality, use 'Feature'. If it fixes an issue, use 'Bug Fix'. If it improves code structure without changing behavior, use 'Refactor'. If it relates to documentation, use 'Documentation'. For minor maintenance tasks, use 'Chore'. For anything else, use 'Other'.
5.  **Display Date**: Convert the 'Commit Date' into a human-readable format, such as "Month Day, Year" (e.g., "October 27, 2023").

Ensure the output is in the specified JSON format.
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
          throw new Error('Failed to generate portfolio update card.');
        }
        return output;
      } catch (error: any) {
        lastError = error;
        // Check for rate limit error (429 / RESOURCE_EXHAUSTED)
        const isRateLimit = error.message?.includes('429') || 
                          error.message?.includes('RESOURCE_EXHAUSTED') ||
                          error.status === 429;
        
        if (isRateLimit && i < maxRetries - 1) {
          // Exponential backoff: 2s, 4s, 8s...
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
