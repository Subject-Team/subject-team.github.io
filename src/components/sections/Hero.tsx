'use client';

import React from 'react';
import { KineticMonolith } from '@/components/3d/KineticMonolith';
import { ArrowDown, Code2, Terminal, ShieldCheck, Cpu } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 pb-12 flex flex-col justify-between overflow-hidden bg-technical-grid">
      
      {/* Top Section Header & Headline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Authoritative Editorial Copy */}
          <div className="lg:col-span-7 z-10">
            {/* Monospace Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-electric/30 bg-electric/10 text-electric font-mono text-[11px] tracking-wider mb-6">
              <Terminal className="w-3 h-3" />
              <span>DISCIPLINED SYSTEMS & COMPUTATION</span>
            </div>

            {/* Editorial Headline with Tight Optical Tracking */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-titanium leading-[1.04] mb-6">
              Architecture with Precision. <br />
              <span className="text-titanium-muted font-normal">Software with Intent.</span>
            </h1>

            {/* Concise, Grounded Proposition */}
            <p className="max-w-xl text-base sm:text-lg text-titanium-muted leading-relaxed font-normal mb-8">
              We are an engineering collective focused on low-level performance, game engine libraries, healthcare intelligence systems, and resilient cloud architectures. Zero fluff. Pure engineering craft.
            </p>

            {/* Tactile Action Triggers */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-electric text-white font-mono text-xs tracking-wider font-semibold hover:bg-electric-glow transition-all shadow-blue-glow btn-pressable"
              >
                <span>INSPECT REPOSITORIES</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#slib-lab"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-obsidian-card border border-obsidian-border hover:border-electric text-titanium font-mono text-xs tracking-wider transition-all btn-pressable"
              >
                <Code2 className="w-3.5 h-3.5 text-electric" />
                <span>OPEN SLIB CODE LAB</span>
              </a>
            </div>
          </div>

          {/* Right: 3D Kinetic Geometric Monolith */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-[420px] lg:max-w-none">
              <KineticMonolith />
              
              {/* Monolith Spec Tag */}
              <div className="text-center mt-2">
                <span className="inline-block px-2.5 py-0.5 rounded border border-obsidian-border bg-obsidian-card/70 backdrop-blur-md text-[10px] font-mono text-titanium-muted">
                  FIGURE 1.0 — KINETIC POLYHEDRAL MATRIX [INTERACTIVE 60FPS]
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Hardware Telemetry Spec Strip (Teenage Engineering + Warp style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-6 border-t border-obsidian-border dark:border-obsidian-hairline">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          
          <div className="hardware-panel p-3 rounded-sm">
            <div className="text-titanium-muted text-[10px] uppercase flex items-center gap-1.5 mb-1">
              <Cpu className="w-3 h-3 text-electric" />
              <span>CORE TOOLING</span>
            </div>
            <div className="text-titanium font-medium tracking-tight">SLib (Godot 4.x Engine)</div>
          </div>

          <div className="hardware-panel p-3 rounded-sm">
            <div className="text-titanium-muted text-[10px] uppercase flex items-center gap-1.5 mb-1">
              <ShieldCheck className="w-3 h-3 text-electric" />
              <span>SPECIALIZATION</span>
            </div>
            <div className="text-titanium font-medium tracking-tight">Health Intelligence (SaJaPa)</div>
          </div>

          <div className="hardware-panel p-3 rounded-sm">
            <div className="text-titanium-muted text-[10px] uppercase flex items-center gap-1.5 mb-1">
              <Terminal className="w-3 h-3 text-electric" />
              <span>ACTIVE STACKS</span>
            </div>
            <div className="text-titanium font-medium tracking-tight">GDScript · TS · Python</div>
          </div>

          <div className="hardware-panel p-3 rounded-sm">
            <div className="text-titanium-muted text-[10px] uppercase flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-electric" />
              <span>MONITORED UPTIME</span>
            </div>
            <div className="text-titanium font-medium tracking-tight">99.98% Service SLA</div>
          </div>

        </div>
      </div>

    </section>
  );
}
