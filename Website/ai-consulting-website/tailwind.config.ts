import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Red & Blue Professional
        'primary-blue': '#74a6be',
        'accent-red': '#a7292e',
        'accent-yellow': '#fbbf24',
        'accent-yellow-light': '#fcd34d',
        'accent-yellow-dark': '#d97706',
        'accent-purple': '#8b5cf6',
        'accent-purple-light': '#a78bfa',
        'accent-purple-dark': '#7c3aed',
        'accent-gray': '#6b7280',
        'primary-700': '#374151',
        'primary-800': '#1f2937',
        'primary-900': '#111827',
        'background-dark': '#2a2a2a',
        'background-dark-alt': '#353535',
        'background-light-grey': '#404040',
        'background-accent-grey': '#4a4a4a',
        'text-light': '#ffffff',
        'text-muted': '#8a8a8a',
        'hover-interactive': '#569da0',
        'hover-soft': 'rgba(255, 255, 255, 0.1)',
        
        // Legacy color mappings for compatibility
        'primary-dark': '#2a2a2a',
        'background-base': '#2a2a2a',
        'dark-accent': '#353535',
        'neutral-support': '#8a8a8a',
        'cta-highlight': '#a7292e',
        'hover-effect': '#569da0',
        'accent-panels': '#353535',
        'success-green': '#10b981',
        'warning-orange': '#f59e0b',
        'text-primary': '#ffffff',
        'text-secondary': '#d1d5db',
        'background': '#2a2a2a',
        'foreground': '#ffffff',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #74a6be 0%, #569da0 100%)',
        'gradient-accent': 'linear-gradient(135deg, #a7292e 0%, #74a6be 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2a2a2a 0%, #353535 100%)',
        'gradient-soft-grey': 'linear-gradient(135deg, #404040 0%, #4a4a4a 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'SF Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
        'brutalist-heading': ['Bangers', 'Manrope', 'Inter', 'system-ui', 'sans-serif'],
        'brutalist-body': ['Comic Neue', 'Nunito Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['2.5rem', { lineHeight: '1.1' }],
        'hero-lg': ['3.5rem', { lineHeight: '1.1' }],
        'h1': ['1.875rem', { lineHeight: '1.2' }],
        'h1-lg': ['2.5rem', { lineHeight: '1.2' }],
        'h2': ['1.5rem', { lineHeight: '1.3' }],
        'h2-lg': ['2rem', { lineHeight: '1.3' }],
        'h3': ['1.25rem', { lineHeight: '1.4' }],
        'h3-lg': ['1.5rem', { lineHeight: '1.4' }],
        'h4': ['1.125rem', { lineHeight: '1.5' }],
      },
      lineHeight: {
        'hero': '1.1',
        'h1': '1.2',
        'h2': '1.3',
        'h3': '1.4',
        'tight': '1.5',
      },
    },
  },
  plugins: [],
}

export default config