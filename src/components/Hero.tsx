
"use client"

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-accent text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Disponible para nuevos proyectos
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-center">
            Héctor Cruz <br />
            <span className="text-primary">Profesional de IT</span> & <br />
            Software Dev
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium mx-auto text-center">
            Más de 10 años optimizando procesos tecnológicos y desarrollando soluciones robustas. 
            Especialista en Análisis de Sistemas, Bases de Datos y Soporte de Nivel 3.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
            <Button size="lg" className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-lg group" asChild>
              <a href="#projects">
                Ver mis proyectos
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-2 border-border hover:border-accent hover:bg-accent hover:text-secondary-foreground font-bold h-14 px-8 text-lg" asChild>
              <a href="#contact">Contactar ahora</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
