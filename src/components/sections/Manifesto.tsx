'use client';

import React from 'react';

export function Manifesto() {
  return (
    <section className="py-24 border-t border-obsidian-border dark:border-obsidian-hairline bg-obsidian-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-[11px] font-mono text-electric tracking-widest uppercase">
            // PHILOSOPHY & DOCTRINE
          </span>
          <span className="h-px flex-1 bg-obsidian-border dark:bg-obsidian-hairline" />
        </div>

        {/* Asymmetric Koto Studio Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Architectural Thesis */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-titanium leading-tight mb-6">
              We reject software bloat in favor of mathematical rigor.
            </h2>
            <div className="text-xs font-mono text-titanium-muted uppercase tracking-widest">
              DOC. REF: MANIFESTO-2026.01
            </div>
          </div>

          {/* Right Column: Three Grounded Tenets */}
          <div className="lg:col-span-7 space-y-10">
            
            <div className="border-l-2 border-electric pl-6">
              <h3 className="text-lg font-semibold text-titanium mb-2 tracking-tight">
                1. Performance as an Absolute Constraint
              </h3>
              <p className="text-sm sm:text-base text-titanium-muted leading-relaxed">
                Whether writing game math in GDScript or data pipelines in Python, latency compounds. We write routines that avoid hidden memory allocations, reduce frame stutter, and respect system memory ceilings.
              </p>
            </div>

            <div className="border-l-2 border-titanium-dark pl-6 hover:border-electric transition-colors">
              <h3 className="text-lg font-semibold text-titanium mb-2 tracking-tight">
                2. High-Assurance Healthcare Architecture
              </h3>
              <p className="text-sm sm:text-base text-titanium-muted leading-relaxed">
                In projects like SaJaPa, data integrity is paramount. We engineer fail-safe data schemas, offline-first operational caches, and strict privacy boundaries that guarantee deterministic behavior under pressure.
              </p>
            </div>

            <div className="border-l-2 border-titanium-dark pl-6 hover:border-electric transition-colors">
              <h3 className="text-lg font-semibold text-titanium mb-2 tracking-tight">
                3. Open-Source Accountability
              </h3>
              <p className="text-sm sm:text-base text-titanium-muted leading-relaxed">
                We believe software developers earn trust in the open. Our libraries are publicly reviewed, continuously tested against live game runtimes, and benchmarked against standard language implementations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
