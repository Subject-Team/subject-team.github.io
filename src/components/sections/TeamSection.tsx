'use client';

import React from 'react';
import { TEAM_MEMBERS, TeamMember } from '@/lib/github';
import { Users, Github, ArrowUpRight, Code, Terminal, GitCommit } from 'lucide-react';

export function TeamSection() {
  return (
    <section id="collective" className="py-24 border-t border-obsidian-border dark:border-obsidian-hairline bg-obsidian-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-electric tracking-widest uppercase mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>// ENGINEERING COLLECTIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-titanium">
              The Engineers Behind Subject
            </h2>
          </div>

          <div className="text-xs font-mono text-titanium-muted">
            HEADQUARTERS: <span className="text-titanium">REMOTE & DISTRIBUTED</span>
          </div>
        </div>

        {/* Team Cards Grid (Teenage Engineering Hardware Card Styling) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member: TeamMember, idx) => (
            <div
              key={member.login}
              className="hardware-panel p-6 rounded-sm flex flex-col justify-between group hover:border-electric transition-colors"
            >
              <div>
                {/* Header Tag & Dev Serial */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-obsidian-border dark:border-obsidian-hairline text-xs font-mono">
                  <span className="text-[10px] text-electric uppercase tracking-widest">
                    ST-ENG-0{idx + 1}
                  </span>
                  <div className="flex items-center gap-1 text-titanium-muted text-[11px]">
                    <GitCommit className="w-3 h-3 text-electric" />
                    <span>{member.contributions}+ COMMITS</span>
                  </div>
                </div>

                {/* Avatar & Identifiers */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={member.avatarUrl}
                      alt={member.name}
                      className="w-14 h-14 rounded-sm border border-obsidian-border object-cover bg-obsidian-elevated"
                    />
                    <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-electric border border-obsidian" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-titanium group-hover:text-electric transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono text-electric font-medium">
                      @{member.login}
                    </div>
                  </div>
                </div>

                {/* Role & Bio */}
                <div className="text-xs font-mono text-titanium uppercase tracking-wider mb-2 font-semibold">
                  {member.role}
                </div>

                <p className="text-xs sm:text-sm text-titanium-muted leading-relaxed mb-6 font-normal">
                  {member.bio}
                </p>

                {/* Tech Stacks */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded border border-obsidian-border bg-obsidian-elevated text-[10px] font-mono text-titanium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <div className="pt-4 border-t border-obsidian-border dark:border-obsidian-hairline">
                <a
                  href={member.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-mono text-titanium hover:text-electric transition-colors btn-pressable"
                >
                  <span className="flex items-center gap-1.5">
                    <Github className="w-3.5 h-3.5 text-electric" />
                    <span>GITHUB PROFILE</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-titanium-muted" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
