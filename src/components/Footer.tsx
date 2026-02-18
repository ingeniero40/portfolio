
import React from 'react';

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-bold tracking-tighter text-primary">
          HC<span className="text-accent">.</span>PORTFOLIO
        </div>
        <div className="text-muted-foreground text-sm font-medium">
          © {new Date().getFullYear()} Héctor Cruz. Todos los derechos reservados.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="text-muted-foreground hover:text-accent transition-colors">GitHub</a>
          <a href="#" className="text-muted-foreground hover:text-accent transition-colors">X</a>
        </div>
      </div>
    </footer>
  );
}
