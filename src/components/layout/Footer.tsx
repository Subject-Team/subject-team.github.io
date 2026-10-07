'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, Github, ExternalLink, ArrowUp } from 'lucide-react';

export function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'Subject.Team.Contact@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-obsidian-border dark:border-obsidian-hairline bg-obsidian text-titanium">
      
      {/* Contact & Inquiries Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="hardware-panel p-8 sm:p-12 rounded-sm border-electric/30 relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl">
            <div className="text-[11px] font-mono text-electric tracking-widest uppercase mb-3 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>// DIRECT COLLABORATION & INQUIRIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-titanium mb-4">
              Have an engineering challenge? Let's build it right.
            </h2>

            <p className="text-sm sm:text-base text-titanium-muted mb-8 leading-relaxed font-normal">
              We consult on low-latency game engine tooling, healthcare architectures, and custom enterprise software development.
            </p>

            {/* Tactile Copy Email Box */}
            <div className="inline-flex flex-wrap items-center gap-3 p-1.5 bg-obsidian-elevated border border-obsidian-border rounded-sm">
              <span className="px-3 py-1 font-mono text-xs sm:text-sm text-titanium select-all">
                {email}
              </span>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-electric hover:bg-electric-glow text-white font-mono text-xs font-semibold rounded-sm transition-all shadow-sm btn-pressable"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY EMAIL'}</span>
              </button>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-electric/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>

      {/* Engraved Hardware Footer */}
      <div className="border-t border-obsidian-border dark:border-obsidian-hairline py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-titanium-muted">
          
          <div className="flex items-center gap-4">
            <span>© 2024–2026 SUBJECT TEAM.</span>
            <span>·</span>
            <span className="text-[11px]">CRAFTED WITH INTENT. ZERO AI TEMPLATES.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Subject-Team"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-electric transition-colors flex items-center gap-1"
            >
              <span>GITHUB</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href="https://subject-team.github.io/uptime/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-electric transition-colors flex items-center gap-1"
            >
              <span>UPTIME STATUS</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={scrollToTop}
              className="hover:text-titanium transition-colors flex items-center gap-1 p-1 bg-obsidian-card rounded border border-obsidian-border"
              title="Return to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
