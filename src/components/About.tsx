import React from 'react';
import Image from 'next/image';
import { getPlaceholderById } from '@/lib/placeholder-images';

export function About() {
  const profileImage = getPlaceholderById('hector-profile');

  return (
    <section id="about" className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative z-10">
              <Image 
                src={profileImage.imageUrl} 
                alt="Héctor Cruz" 
                fill
                className="object-cover"
                data-ai-hint={profileImage.imageHint}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 bg-primary w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-center leading-tight z-20 shadow-xl">
              Desde<br/>1993
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Sobre Mí</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                Versatilidad Técnica y <span className="text-accent">Experiencia Sólida</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Soy <span className="text-foreground font-semibold">Tecnólogo en Análisis y Desarrollo de Sistemas de Información (ADSI)</span> egresado del SENA, con una sólida trayectoria técnica iniciada en 1993. Mi enfoque combina la precisión del diagnóstico de hardware y redes con la agilidad del desarrollo web moderno en JavaScript, PHP y SQL.
              </p>
              <p>
                A lo largo de mi carrera, he demostrado una alta adaptabilidad al cambio y un compromiso con el aprendizaje continuo, lo que me permite enfrentar retos bajo presión y liderar procesos de transformación digital en empresas de alto nivel.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-foreground">30+</div>
                <div className="text-sm text-muted-foreground">Años de Trayectoria</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Proyectos Enterprise</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Tecnologías Dominadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Compromiso ITIL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}