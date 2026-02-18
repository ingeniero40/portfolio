
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Héctor Cruz | IT Engineer & Full Stack Software Developer',
  description: 'Portafolio profesional de Héctor Cruz. Especialista en Análisis de Sistemas, Bases de Datos y Soporte de Nivel 3 con más de 10 años de experiencia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent selection:text-secondary-foreground">
        {children}
      </body>
    </html>
  );
}
