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
        'background-dark': '#2a2a2a',
        'background-dark-alt': '#353535',
        'background-light-grey': '#404040',
        'background-accent-grey': '#4a4a4a',
        'text-light': '#ffffff',
        'text-secondary': '#c4c4c4',
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
        'background': '#2a2a2a',
        'foreground': '#ffffff',
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
      },
      fontSize: {
        'hero': '3.5rem',
        'h1': '2.5rem',
        'h2': '2rem',
        'h3': '1.5rem',
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