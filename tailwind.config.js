/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0A0B0E',
          card: '#12141A',
          elevated: '#1A1D24',
          border: '#242731',
          hairline: '#1C1F28',
        },
        chalk: {
          DEFAULT: '#F4F5F7',
          card: '#FFFFFF',
          elevated: '#EBECEF',
          border: '#DCDFE4',
          hairline: '#E5E7EB',
        },
        electric: {
          DEFAULT: '#0066FF',
          glow: '#3B82F6',
          deep: '#0047B3',
          subtle: 'rgba(0, 102, 255, 0.08)',
          strong: 'rgba(0, 102, 255, 0.25)',
        },
        titanium: {
          DEFAULT: '#E5E7EB',
          muted: '#9CA3AF',
          dark: '#4B5563',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Geist Mono', 'Menlo', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        widest: '0.15em',
      },
      boxShadow: {
        'hardware-dark': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.06), 0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'hardware-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.9), 0 8px 24px -6px rgba(0, 0, 0, 0.08)',
        'blue-glow': '0 0 25px -3px rgba(0, 102, 255, 0.35)',
      },
    },
  },
  plugins: [],
};
