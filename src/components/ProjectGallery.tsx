
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from '@/components/ui/dialog';
import { ExternalLink, Layers } from 'lucide-react';

const projects = [
  {
    id: 'p1',
    title: 'ERP Custom Solutions',
    category: 'Full Stack',
    image: PlaceHolderImages[0].imageUrl,
    hint: PlaceHolderImages[0].imageHint,
    details: 'Desarrollo de un sistema de planificación de recursos empresariales a medida utilizando PHP y PostgreSQL para una logística eficiente.'
  },
  {
    id: 'p2',
    title: 'Postgres Tuner Pro',
    category: 'Database',
    image: PlaceHolderImages[1].imageUrl,
    hint: PlaceHolderImages[1].imageHint,
    details: 'Algoritmo de optimización de queries y balanceo de carga para bases de datos transaccionales de alto tráfico.'
  },
  {
    id: 'p3',
    title: 'InfraSec Audit Tool',
    category: 'Security',
    image: PlaceHolderImages[2].imageUrl,
    hint: PlaceHolderImages[2].imageHint,
    details: 'Panel de control para auditorías de seguridad en redes locales y administración de Active Directory.'
  },
  {
    id: 'p4',
    title: 'Supply Chain Tracker',
    category: 'Web App',
    image: PlaceHolderImages[3].imageUrl,
    hint: PlaceHolderImages[3].imageHint,
    details: 'Dashboard interactivo para el monitoreo en tiempo real de suministros y envíos internacionales.'
  }
];

export function ProjectGallery() {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Full Stack', 'Database', 'Security', 'Web App'];

  const filteredProjects = filter === 'Todos' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Portafolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Galería de <span className="text-accent">Proyectos</span></h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                ? 'bg-primary text-white' 
                : 'bg-card border border-border text-muted-foreground hover:border-accent/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card className="group relative overflow-hidden bg-card border-border cursor-pointer aspect-video rounded-3xl">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    data-ai-hint={project.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-8 space-y-2">
                    <Badge className="bg-primary hover:bg-primary text-white">{project.category}</Badge>
                    <h4 className="text-2xl font-bold">{project.title}</h4>
                  </div>
                  <div className="absolute top-8 right-8 bg-accent p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                    <Layers className="text-secondary-foreground w-6 h-6" />
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-card border-border max-w-3xl">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-accent">{project.title}</DialogTitle>
                  <DialogDescription className="text-muted-foreground">Detalles técnicos del proyecto</DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-xl font-bold">Descripción del Proyecto</h5>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.details}
                    </p>
                    <div className="flex gap-4 pt-4">
                      <Badge variant="outline" className="border-accent/50 text-accent">SENA Certificado</Badge>
                      <Badge variant="outline" className="border-accent/50 text-accent">ITIL Standards</Badge>
                      <Badge variant="outline" className="border-accent/50 text-accent">Performance Opt</Badge>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
