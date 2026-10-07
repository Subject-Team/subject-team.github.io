'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Default to dark, check saved or system
    const saved = localStorage.getItem('subject-theme');
    if (saved) {
      const darkVal = saved === 'dark';
      setIsDark(darkVal);
      document.documentElement.classList.toggle('dark', darkVal);
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem('subject-theme', next ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', next);
  };

  if (!mounted) {
    return (
      <div className="w-16 h-7 bg-obsidian-card border border-obsidian-border rounded-sm opacity-50" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex items-center p-0.5 bg-obsidian-card border border-obsidian-border dark:border-obsidian-hairline rounded-full cursor-pointer transition-all duration-150 hover:border-electric focus:outline-none focus:ring-1 focus:ring-electric"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title="Hardware Theme Switcher"
    >
      <div className="flex items-center gap-1.5 px-2 py-1 text-[10px] font-mono tracking-widest uppercase">
        <span
          className={`flex items-center gap-1 transition-colors ${
            isDark ? 'text-electric font-semibold' : 'text-titanium-muted'
          }`}
        >
          <Moon className="w-3 h-3" />
          <span className="hidden sm:inline">DARK</span>
        </span>
        <span className="text-titanium-dark">/</span>
        <span
          className={`flex items-center gap-1 transition-colors ${
            !isDark ? 'text-electric font-semibold' : 'text-titanium-muted'
          }`}
        >
          <span className="hidden sm:inline">LIGHT</span>
          <Sun className="w-3 h-3" />
        </span>
      </div>
      
      {/* Mechanical slide indicator pill */}
      <span
        className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-electric/15 border border-electric/30 transition-transform duration-200 ease-out pointer-events-none ${
          isDark ? 'left-0.5' : 'left-[calc(50%+1px)]'
        }`}
      />
    </button>
  );
}
