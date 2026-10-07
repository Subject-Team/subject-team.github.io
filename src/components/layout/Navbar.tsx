'use client';

import React from 'react';
import { LiveStatusPill } from '@/components/ui/LiveStatusPill';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Github, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-obsidian/85 dark:bg-obsidian/85 backdrop-blur-xl border-b border-obsidian-border dark:border-obsidian-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Identity */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Subject Team Home"
        >
          {/* Tactile Polyhedral Logo Icon */}
          <div className="relative w-8 h-8 rounded-sm bg-obsidian-card border border-obsidian-border flex items-center justify-center transition-colors group-hover:border-electric">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-titanium group-hover:text-electric transition-colors" fill="none" stroke="currentColor" strokeWidth="1.75">
              <polygon points="12 2 2 8.5 12 15 22 8.5 12 2" />
              <polygon points="2 15.5 12 22 22 15.5" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-electric rounded-full" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-titanium flex items-center gap-1.5">
              SUBJECT TEAM
              <span className="text-[10px] font-mono text-electric bg-electric/10 px-1 rounded border border-electric/20 font-normal">
                SYS.V2
              </span>
            </span>
            <span className="text-[10px] font-mono text-titanium-muted tracking-widest uppercase">
              Engineering Collective
            </span>
          </div>
        </a>

        {/* Center: Live Status Telemetry */}
        <div className="hidden md:flex items-center justify-center">
          <LiveStatusPill />
        </div>

        {/* Right Actions: Navigation, GitHub, Theme Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-wider text-titanium-muted mr-2">
            <a href="#projects" className="hover:text-titanium transition-colors">PROJECTS</a>
            <a href="#slib-lab" className="hover:text-titanium transition-colors">SLIB LAB</a>
            <a href="#architecture" className="hover:text-titanium transition-colors">ARCHITECTURE</a>
            <a href="#collective" className="hover:text-titanium transition-colors">COLLECTIVE</a>
          </nav>

          <a
            href="https://github.com/Subject-Team"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono bg-obsidian-card border border-obsidian-border hover:border-electric text-titanium rounded transition-all btn-pressable"
            title="Subject Team on GitHub"
          >
            <Github className="w-3.5 h-3.5 text-electric" />
            <span>GITHUB</span>
            <ArrowUpRight className="w-3 h-3 text-titanium-muted opacity-60" />
          </a>

          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}
