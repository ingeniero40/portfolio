
"use client"

import React, { useState, useEffect } from 'react';
import { Loader2, Zap } from 'lucide-react';
import { WorkUpdateCard } from './WorkUpdateCard';
import { automatedPortfolioUpdate, type AutomatedPortfolioUpdateOutput } from '@/ai/flows/automated-portfolio-updates';

export function RecentActivity() {
  const [updates, setUpdates] = useState<AutomatedPortfolioUpdateOutput[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchActivity() {
      // Mock data representing what might come from a GitHub API fetch
      const activities = [
        {
          repoName: 'hectorcruz/enterprise-portal',
          repoUrl: 'https://github.com/hectorcruz/enterprise-portal',
          commitMessage: 'feat: add role-based access control for department admins',
          commitUrl: 'https://github.com/hectorcruz/enterprise-portal/commit/12345',
          commitDate: new Date().toISOString()
        },
        {
          repoName: 'hectorcruz/db-optimizer-v2',
          repoUrl: 'https://github.com/hectorcruz/db-optimizer-v2',
          commitMessage: 'fix: resolving memory leak in PostgreSQL query balancer',
          commitUrl: 'https://github.com/hectorcruz/db-optimizer-v2/commit/67890',
          commitDate: new Date(Date.now() - 86400000).toISOString()
        },
        {
          repoName: 'hectorcruz/network-monitor-tools',
          repoUrl: 'https://github.com/hectorcruz/network-monitor-tools',
          commitMessage: 'refactor: restructuring monitoring logs for faster parsing',
          commitUrl: 'https://github.com/hectorcruz/network-monitor-tools/commit/abcde',
          commitDate: new Date(Date.now() - 172800000).toISOString()
        }
      ];

      try {
        const results = await Promise.all(
          activities.map(activity => automatedPortfolioUpdate(activity))
        );
        setUpdates(results);
      } catch (error) {
        console.error("Error generating portfolio updates:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchActivity();
  }, []);

  return (
    <section id="activity" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-primary/20 p-2 rounded-lg text-primary">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-primary">
            Trabajo Reciente (AI-Powered)
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            Actividad en Tiempo Real
          </h3>
          <p className="max-w-md text-muted-foreground text-lg">
            Esta sección se actualiza automáticamente analizando mis commits en GitHub utilizando Inteligencia Artificial.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <Loader2 className="w-10 h-10 animate-spin text-accent" />
            <p className="text-muted-foreground animate-pulse">Sincronizando con GitHub y procesando con IA...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updates.map((update, idx) => (
              <WorkUpdateCard key={idx} update={update} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
