
"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Inicio', href: '#home' },
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Servicios', href: '#services' },
  { name: 'Actividad', href: '#activity' },
  { name: 'Contacto', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-background/80 backdrop-blur-md shadow-lg py-2" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-primary">
          HC<span className="text-accent">.</span>PORTFOLIO
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-accent transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/80 transition-all"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border p-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
