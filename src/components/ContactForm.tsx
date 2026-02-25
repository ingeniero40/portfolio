
"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Linkedin, Send, CheckCircle2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarme, Héctor Cruz te responderá pronto.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">Contacto</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Construyamos algo <span className="text-accent">asombroso</span></h3>
              <p className="text-lg text-muted-foreground">
                ¿Tienes un reto técnico o una idea de proyecto? Estoy listo para aportar mi experiencia.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase font-bold tracking-widest">Ubicación</div>
                  <div className="text-xl font-bold">Cali, Valle del Cauca</div>
                </div>
              </div>
              
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase font-bold tracking-widest">Email</div>
                  <div className="text-xl font-bold">hector.cruz.2009@hotmail.com</div>
                </div>
              </div>
              
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center text-primary">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase font-bold tracking-widest">LinkedIn</div>
                  <a href="#" className="text-xl font-bold hover:text-accent transition-colors">hector-cruz-it</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-2xl relative overflow-hidden">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h4 className="text-3xl font-bold">¡Mensaje Recibido!</h4>
                <p className="text-muted-foreground text-lg">
                  Tu consulta ha sido enviada con éxito. Me pondré en contacto contigo lo antes posible.
                </p>
                <Button variant="outline" className="rounded-full px-8" onClick={() => setIsSubmitted(false)}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Nombre</Label>
                    <Input id="name" placeholder="Tu nombre" required className="bg-card border-border h-12 rounded-xl focus:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" required className="bg-card border-border h-12 rounded-xl focus:ring-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Asunto</Label>
                  <Input id="subject" placeholder="¿En qué puedo ayudarte?" required className="bg-card border-border h-12 rounded-xl focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Mensaje</Label>
                  <Textarea id="message" placeholder="Describe tu proyecto o consulta..." required className="bg-card border-border min-h-[150px] rounded-xl focus:ring-primary" />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-full text-lg group transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Enviar Mensaje
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
