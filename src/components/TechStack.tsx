
import React from 'react';
import { Layout, Database, Server, PenTool } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stacks = [
  {
    category: 'Desarrollo Web',
    icon: <Layout className="w-8 h-8 text-primary" />,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'PHP', 'VBA'],
  },
  {
    category: 'Bases de Datos',
    icon: <Database className="w-8 h-8 text-accent" />,
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'Diseño', 'Administración'],
  },
  {
    category: 'Sistemas y Redes',
    icon: <Server className="w-8 h-8 text-primary" />,
    skills: ['Windows/Linux Admin', 'Seguridad de Red', 'Monitoreo', 'ITIL V3 Support'],
  },
  {
    category: 'Herramientas Pro',
    icon: <PenTool className="w-8 h-8 text-accent" />,
    skills: ['Excel Avanzado', 'Análisis de Datos', 'Automatización VBA'],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Tech Stack</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Herramientas & <span className="text-accent">Habilidades</span></h3>
          <p className="text-muted-foreground text-lg">
            Combinación estratégica de infraestructura robusta y desarrollo de software moderno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stacks.map((stack, idx) => (
            <Card key={idx} className="bg-card border-border hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 space-y-6">
                <div className="bg-background w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner">
                  {stack.icon}
                </div>
                <h4 className="text-xl font-bold">{stack.category}</h4>
                <ul className="space-y-3">
                  {stack.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
