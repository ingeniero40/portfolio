
import React from 'react';
import { Building2, Globe, Cpu } from 'lucide-react';

const experiences = [
  {
    company: 'Cargill',
    subtext: '(vía Focus on Solution)',
    role: 'Analista de procesos y Field Services',
    icon: <Globe className="w-10 h-10 text-primary" />,
    description: 'Consultoría y análisis de servicios críticos y arquitecturas de red.'
  },
  {
    company: 'Copa Airlines, Coca-Cola & Mondelez',
    subtext: '(vía Access Consulting)',
    role: 'Soporte especializado & Admin Servidores',
    icon: <Building2 className="w-10 h-10 text-accent" />,
    description: 'Administración de servidores y ejecución de proyectos de infraestructura como "PC-Refresh".'
  },
  {
    company: 'Emcali & Bavaria',
    subtext: '(vía Datacentrum)',
    role: 'Implementación de Directorio Activo',
    icon: <Cpu className="w-10 h-10 text-primary" />,
    description: 'Administración de microservers y soporte técnico integral.'
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Experiencia Destacada</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
              Colaborando con Organizaciones <span className="text-accent">Líderes</span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              He tenido el privilegio de colaborar como consultor y analista para organizaciones líderes a nivel global, gestionando servicios críticos y arquitecturas de red que sostienen operaciones masivas.
            </p>
            
            <div className="pt-8 flex flex-wrap gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
              <span className="text-2xl font-black italic tracking-widest uppercase">Cargill</span>
              <span className="text-2xl font-black italic tracking-widest uppercase">Mondelez</span>
              <span className="text-2xl font-black italic tracking-widest uppercase">Coca-Cola</span>
              <span className="text-2xl font-black italic tracking-widest uppercase">Bavaria</span>
            </div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-background border border-border hover:border-accent/30 transition-all group">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {exp.icon}
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold">{exp.company}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{exp.subtext}</span>
                  </div>
                  <div className="text-accent font-semibold">{exp.role}</div>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
