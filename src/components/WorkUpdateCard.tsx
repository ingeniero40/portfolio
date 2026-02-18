
"use client"

import React from 'react';
import { ExternalLink, GitCommit, FileCode, CheckCircle, HelpCircle, Book, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { AutomatedPortfolioUpdateOutput } from '@/ai/flows/automated-portfolio-updates';

const categoryIcons: Record<string, React.ReactNode> = {
  'Feature': <CheckCircle className="w-4 h-4 text-accent" />,
  'Bug Fix': <Wrench className="w-4 h-4 text-red-400" />,
  'Refactor': <FileCode className="w-4 h-4 text-blue-400" />,
  'Documentation': <Book className="w-4 h-4 text-yellow-400" />,
  'Chore': <GitCommit className="w-4 h-4 text-gray-400" />,
  'Other': <HelpCircle className="w-4 h-4 text-primary" />,
};

export function WorkUpdateCard({ update }: { update: AutomatedPortfolioUpdateOutput }) {
  return (
    <Card className="bg-card border-border hover:border-accent/50 transition-all duration-300 group">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="flex items-center gap-1 bg-background/50 border-primary/20">
            {categoryIcons[update.category] || categoryIcons.Other}
            <span>{update.category}</span>
          </Badge>
          <span className="text-xs text-muted-foreground">{update.displayDate}</span>
        </div>
        <CardTitle className="text-lg leading-tight group-hover:text-accent transition-colors">
          {update.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {update.description}
        </p>
        <a 
          href={update.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-bold text-accent uppercase tracking-widest hover:underline"
        >
          Ver en GitHub <ExternalLink className="ml-1 w-3 h-3" />
        </a>
      </CardContent>
    </Card>
  );
}
