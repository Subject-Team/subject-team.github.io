'use client';

import React, { useState } from 'react';
import { FALLBACK_PROJECTS, TeamProject } from '@/lib/github';
import { Star, ExternalLink, Github, Code, CheckCircle2 } from 'lucide-react';

export function ProjectsReel() {
  const [filter, setFilter] = useState<'all' | 'core' | 'intelligence' | 'systems' | 'research'>('all');

  const filteredProjects = filter === 'all' 
    ? FALLBACK_PROJECTS 
    : FALLBACK_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 border-t border-obsidian-border dark:border-obsidian-hairline bg-technical-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-electric tracking-widest uppercase mb-2">
              <span>// REPOSITORY MATRIX</span>
              <span>·</span>
              <span>INDEX OF WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-titanium">
              Featured Systems & Libraries
            </h2>
          </div>

          {/* Hardware Style Category Filter Switches */}
          <div className="flex items-center gap-1.5 p-1 bg-obsidian-card border border-obsidian-border rounded-sm text-xs font-mono">
            {(['all', 'core', 'intelligence', 'systems', 'research'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-sm transition-all uppercase tracking-wider text-[10px] sm:text-xs btn-pressable ${
                  filter === cat
                    ? 'bg-electric text-white font-semibold shadow-sm'
                    : 'text-titanium-muted hover:text-titanium'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Hardware Panel Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: TeamProject) => (
            <article
              key={project.id}
              className="hardware-panel rounded-sm p-6 flex flex-col justify-between group hover:border-electric transition-colors"
            >
              {/* Card Header: Name, Language Pill, Stars */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[10px] font-mono text-electric uppercase tracking-widest block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-titanium group-hover:text-electric transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.stars > 0 && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-obsidian-border bg-obsidian-elevated text-xs font-mono text-titanium">
                        <Star className="w-3 h-3 text-electric fill-electric" />
                        <span>{project.stars}</span>
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded border border-electric/30 bg-electric/10 text-[10px] font-mono text-electric">
                      {project.language}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-titanium-muted mb-4 font-medium">
                  {project.tagline}
                </div>

                <p className="text-sm text-titanium-muted leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Technical Highlights */}
                <div className="space-y-1.5 mb-8">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono text-titanium-muted">
                      <span className="w-1 h-1 rounded-full bg-electric" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Links */}
              <div className="flex items-center justify-between pt-4 border-t border-obsidian-border dark:border-obsidian-hairline text-xs font-mono">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-titanium hover:text-electric transition-colors btn-pressable"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>SOURCE REPO</span>
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-electric hover:underline transition-colors btn-pressable"
                  >
                    <span>LIVE DOCS</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
