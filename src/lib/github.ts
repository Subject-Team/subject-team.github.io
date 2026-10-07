export interface TeamProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  demoUrl?: string;
  category: 'core' | 'intelligence' | 'systems' | 'research';
  highlights: string[];
}

export interface TeamMember {
  login: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  url: string;
  stack: string[];
  contributions: number;
}

export const FALLBACK_PROJECTS: TeamProject[] = [
  {
    id: 'slib',
    name: 'SLib',
    tagline: 'Subject Library for GDScript',
    description: 'High-performance utility library for the Godot Engine. Optimized ready-made algorithms, vector math routines, UI handlers, and state management.',
    language: 'GDScript',
    stars: 31,
    url: 'https://github.com/Subject-Team/SLib',
    demoUrl: 'https://subject-team.github.io/SLib/',
    category: 'core',
    highlights: ['Zero-allocation vector math', 'Modular state machine', 'Fast serialization', 'Battle-tested in game builds']
  },
  {
    id: 'sajapa',
    name: 'SaJaPa',
    tagline: 'Healthcare Intelligence Engine',
    description: 'A platform injecting intelligence into personal healthcare. Architected for secure patient telemetry, real-time metrics, and cloud-synced diagnostics.',
    language: 'TypeScript / Node',
    stars: 1,
    url: 'https://github.com/Subject-Team/SajapaApp',
    demoUrl: 'https://subject-team.github.io/SajapaApp/',
    category: 'intelligence',
    highlights: ['HIPAA-conscious schema', 'Real-time vital analytics', 'Offline-first sync', 'Cryptographic audit log']
  },
  {
    id: 'shopeek',
    name: 'Shopeek',
    tagline: 'Next-Gen Commerce Architecture',
    description: 'Modern, high-performance web storefront engineered with strict TypeScript typing, sub-second TTFB, and fluid gesture-based interactions.',
    language: 'TypeScript',
    stars: 1,
    url: 'https://github.com/Subject-Team/ShopeekFrontend',
    demoUrl: 'https://shopeek-frontend.vercel.app',
    category: 'systems',
    highlights: ['Sub-second page transitions', 'Optimistic UI mutations', 'Fluid cart gestures', 'Tailwind custom tokens']
  },
  {
    id: 'spidercam',
    name: 'SpiderCam',
    tagline: 'Computer Vision & Tracking Matrix',
    description: 'Robotics and machine vision framework written in Python for coordinate tracking, spatial calibration, and real-time hardware telemetry.',
    language: 'Python',
    stars: 1,
    url: 'https://github.com/Subject-Team/SpiderCam',
    category: 'research',
    highlights: ['Low-latency video feed', 'Spatial matrix solver', 'OpenCV pipeline', 'Hardware telemetry bridge']
  },
  {
    id: 'uptime',
    name: 'Uptime Matrix',
    tagline: 'Automated Status & Telemetry',
    description: 'Open status monitoring verifying end-to-end service availability, response latencies, and production endpoints around the clock.',
    language: 'Markdown / CI',
    stars: 1,
    url: 'https://github.com/Subject-Team/uptime',
    demoUrl: 'https://subject-team.github.io/uptime/',
    category: 'systems',
    highlights: ['99.98% monitored SLA', 'GitHub Actions heartbeats', 'Public incident log', 'Instant outage alerts']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    login: 'mkh-user',
    name: 'Mahan Khalili',
    role: 'System Research & Architecture',
    bio: 'Researching foundational computer science, low-level performance, and resilient system design.',
    avatarUrl: 'https://avatars.githubusercontent.com/u/100031940?v=4',
    url: 'https://github.com/mkh-user',
    stack: ['GDScript', 'C++', 'System Design', 'Algorithms'],
    contributions: 320
  },
  {
    login: 'EbParsa',
    name: 'Parsa Ebrahimi',
    role: 'Core Engineering & Platform',
    bio: 'Architecting scalable applications, high-craft web interfaces, and distributed databases.',
    avatarUrl: 'https://avatars.githubusercontent.com/u/176131640?v=4',
    url: 'https://github.com/EbParsa',
    stack: ['TypeScript', 'React', 'Cloud Architectures', 'Node.js'],
    contributions: 48
  },
  {
    login: 'snipercup',
    name: 'Snipercup',
    role: 'Engineering & Open Source Contributor',
    bio: 'Building utility libraries, developer tooling, and automated workflows across Subject Team repos.',
    avatarUrl: 'https://avatars.githubusercontent.com/u/176131640?v=4',
    url: 'https://github.com/snipercup',
    stack: ['Python', 'Automation', 'DevOps', 'QA Systems'],
    contributions: 35
  }
];

export async function fetchLiveRepoStats(): Promise<Record<string, { stars: number; pushed_at: string }>> {
  try {
    const res = await fetch('https://api.github.com/orgs/Subject-Team/repos', {
      next: { revalidate: 3600 }
    });
    if (!res.ok) throw new Error('Failed to fetch repos');
    const data = await res.json();
    const stats: Record<string, { stars: number; pushed_at: string }> = {};
    for (const repo of data) {
      stats[repo.name.toLowerCase()] = {
        stars: repo.stargazers_count,
        pushed_at: repo.pushed_at
      };
    }
    return stats;
  } catch {
    return {
      slib: { stars: 31, pushed_at: new Date().toISOString() },
      sajapaapp: { stars: 1, pushed_at: new Date().toISOString() },
      shopeekfrontend: { stars: 1, pushed_at: new Date().toISOString() },
      spidercam: { stars: 1, pushed_at: new Date().toISOString() },
      uptime: { stars: 1, pushed_at: new Date().toISOString() }
    };
  }
}
