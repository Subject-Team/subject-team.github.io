'use client';

import React, { useState } from 'react';
import { Layers, ShieldCheck, Database, Cpu, Network, Lock, Zap } from 'lucide-react';

interface ArchitectureNode {
  id: string;
  name: string;
  tag: string;
  icon: React.ReactNode;
  specs: string[];
  description: string;
  guarantees: string;
}

const NODES: ArchitectureNode[] = [
  {
    id: 'client',
    name: 'Client & Application Tier',
    tag: 'TIER 01 · EDGE CONSUMPTION',
    icon: <Network className="w-5 h-5 text-electric" />,
    specs: ['Sub-second TTFB', 'Offline-first Local Store', 'Optimistic UI Pipeline'],
    description: 'Lightweight interfaces built on strict typing and native runtime primitives. Designed to function continuously even during network outages.',
    guarantees: '< 50ms Input Response Latency'
  },
  {
    id: 'security',
    name: 'Zero-Trust Security & Ingress',
    tag: 'TIER 02 · PERIMETER INTEGRITY',
    icon: <ShieldCheck className="w-5 h-5 text-electric" />,
    specs: ['Cryptographic Audit Trail', 'Role-Based Enclaves', 'mTLS Inter-Service Routing'],
    description: 'Every request is authenticated, sanitized, and cryptographically verified at the edge boundary before entering downstream processing systems.',
    guarantees: 'Zero Unauthenticated Surface Area'
  },
  {
    id: 'intelligence',
    name: 'Intelligent Core & Algorithms',
    tag: 'TIER 03 · COMPUTATION ENGINE',
    icon: <Cpu className="w-5 h-5 text-electric" />,
    specs: ['SaJaPa Health Analytics', 'SLib Spatial Math Kernels', 'Deterministic State Transitions'],
    description: 'Hardware-accelerated processing logic responsible for medical biometric evaluation, low-latency game math, and real-time computer vision inference.',
    guarantees: 'Deterministic Numerical Precision'
  },
  {
    id: 'database',
    name: 'Distributed Cloud Persistence',
    tag: 'TIER 04 · PERSISTENCE & SYNC',
    icon: <Database className="w-5 h-5 text-electric" />,
    specs: ['ACID-compliant Datastores', 'Append-only Health Logs', 'Geo-replicated Backups'],
    description: 'Multi-region replicated storage architecture guaranteeing zero data loss, strict snapshot isolation, and continuous cryptographic verification.',
    guarantees: '99.999% Durability SLA'
  }
];

export function ArchitectureMap() {
  const [activeNode, setActiveNode] = useState<ArchitectureNode>(NODES[0]);

  return (
    <section id="architecture" className="py-24 border-t border-obsidian-border dark:border-obsidian-hairline bg-technical-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-electric tracking-widest uppercase mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>// SYSTEM SCHEMATIC · BLUEPRINT VIEW</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-titanium">
              Architectural Pipeline
            </h2>
          </div>

          <div className="text-xs font-mono text-titanium-muted">
            SYSTEM SPECIFICATION: <span className="text-electric">ST-SYS-V2</span>
          </div>
        </div>

        {/* Blueprint Interactive Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left: Step Schematic Pipeline */}
          <div className="lg:col-span-6 space-y-3">
            {NODES.map((node, idx) => {
              const isSelected = activeNode.id === node.id;
              return (
                <div key={node.id} className="relative">
                  {/* Connection Line Between Nodes */}
                  {idx < NODES.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-px bg-obsidian-border dark:bg-obsidian-hairline -z-10" />
                  )}

                  <button
                    onClick={() => setActiveNode(node)}
                    className={`w-full text-left p-5 rounded-sm border transition-all flex items-start gap-4 btn-pressable ${
                      isSelected
                        ? 'border-electric bg-obsidian-card shadow-sm text-titanium'
                        : 'border-obsidian-border bg-obsidian-card/60 text-titanium-muted hover:border-titanium-dark hover:text-titanium'
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-sm border transition-colors ${
                        isSelected
                          ? 'border-electric bg-electric/10 text-electric'
                          : 'border-obsidian-border bg-obsidian-elevated text-titanium-raw'
                      }`}
                    >
                      {node.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-electric tracking-widest uppercase">
                          {node.tag}
                        </span>
                        <span className="text-[10px] font-mono text-titanium-dark">
                          0{idx + 1}
                        </span>
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-titanium mb-1">
                        {node.name}
                      </div>
                      <div className="text-xs font-mono text-titanium-muted truncate">
                        {node.specs.join(' · ')}
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right: Technical Inspector Panel (Hardware Chassis Style) */}
          <div className="lg:col-span-6">
            <div className="hardware-panel p-8 rounded-sm border-electric/40 relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-obsidian-border dark:border-obsidian-hairline">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                  <span className="text-xs font-mono text-titanium font-semibold uppercase tracking-wider">
                    SPECIFICATION INSPECTOR
                  </span>
                </div>
                <span className="text-xs font-mono text-electric">
                  NODE: {activeNode.id.toUpperCase()}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-titanium mb-2">{activeNode.name}</h3>
                <p className="text-sm text-titanium-muted leading-relaxed font-normal">
                  {activeNode.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-obsidian-border">
                <div className="text-xs font-mono text-titanium-muted uppercase tracking-wider">
                  VERIFIED DESIGN SPECIFICATIONS:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeNode.specs.map((spec, i) => (
                    <div key={i} className="p-3 bg-obsidian-elevated/60 border border-obsidian-border rounded-sm text-xs font-mono text-titanium">
                      <div className="text-electric text-[10px] mb-0.5">METRIC #{i + 1}</div>
                      <div>{spec}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 rounded-sm bg-electric/5 border border-electric/20 flex items-center justify-between">
                <span className="text-xs font-mono text-titanium-muted">GUARANTEED SLA:</span>
                <span className="text-xs font-mono font-semibold text-electric">{activeNode.guarantees}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
