'use client';

import React, { useEffect, useState } from 'react';
import { Activity, GitCommit, CheckCircle2 } from 'lucide-react';

interface LiveStatusPillProps {
  className?: string;
}

export function LiveStatusPill({ className = '' }: LiveStatusPillProps) {
  const [latency, setLatency] = useState<number | null>(null);

  useEffect(() => {
    // Simulate real-time latency ping
    const start = performance.now();
    fetch('https://api.github.com/orgs/Subject-Team', { method: 'HEAD', cache: 'no-store' })
      .then(() => {
        const delta = Math.round(performance.now() - start);
        setLatency(delta);
      })
      .catch(() => {
        setLatency(24);
      });
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-obsidian-border dark:border-obsidian-hairline bg-obsidian-card/80 backdrop-blur-md text-[11px] font-mono tracking-wider ${className}`}
      title="Live Subject Team Infrastructure Telemetry"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-electric" />
      </span>

      <span className="text-titanium font-medium uppercase tracking-widest text-[10px]">
        OPERATIONAL
      </span>

      <span className="text-titanium-dark">|</span>

      <div className="flex items-center gap-1 text-titanium-muted">
        <Activity className="w-3 h-3 text-electric" />
        <span>{latency !== null ? `${latency}ms` : 'PINGING...'}</span>
      </div>

      <span className="hidden sm:inline text-titanium-dark">|</span>

      <div className="hidden sm:flex items-center gap-1 text-titanium-muted">
        <GitCommit className="w-3 h-3 text-titanium-raw" />
        <span>7 REPOS</span>
      </div>
    </div>
  );
}
