
import React from 'react';
import { Code2, Database, ShieldCheck, Settings2 } from 'lucide-react';

const services = [
  {
    title: 'Desarrollo de Aplicaciones Web',
    desc: 'Creación de soluciones a medida utilizando PHP y frameworks modernos para entornos corporativos de alto rendimiento.',
    icon: <Code2 className="w-10 h-10 text-primary" />
  },
  {
    title: 'Optimización de Bases de Datos',
    desc: 'Diseño, mantenimiento y migración de datos complejos garantizando integridad, velocidad y seguridad escalable.',
    icon: <Database className="w-10 h-10 text-accent" />
  },
  {
    title: 'Consultoría IT & Soporte Nivel 3',
    desc: 'Resolución de problemas críticos de software, hardware y redes basados en metodologías estándar de la industria.',
    icon: <ShieldCheck className="w-10 h-10 text-primary" />
  },
  {
    title: 'Automatización de Procesos',
    desc: 'Mejora radical de flujos de trabajo mediante VBA y herramientas ofimáticas avanzadas para reducir tiempos operativos.',
    icon: <Settings2 className="w-10 h-10 text-accent" />
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Servicios</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Lo que puedo <span className="text-accent">hacer por ti</span></h3>
          </div>
          <p className="text-muted-foreground text-lg max-w-sm">
            Soluciones integrales que unen el mundo del desarrollo de software con la infraestructura de IT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {services.map((service, idx) => (
            <div key={idx} className="bg-card p-12 hover:bg-card/80 transition-all group">
              <div className="mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-8 flex items-center text-sm font-bold text-accent tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Más información <div className="ml-2 w-8 h-px bg-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
