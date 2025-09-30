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
        // NEWCODE True Flowing Gradient System
        'gradient-light': '#BCBCBC',
        'gradient-medium-light': '#ABABAB',
        'gradient-medium': '#9A9A9A',
        'gradient-medium-dark': '#898989',
        'gradient-dark': '#787878',

        // Clean Typography
        'typography-primary': '#000000',
        'typography-secondary': '#1a1a1a',
        'typography-light': '#333333',
        'accent-white': '#FFFFFF',

        // Minimal State Colors
        'state-hover': 'rgba(0, 0, 0, 0.1)',
        'state-active': 'rgba(0, 0, 0, 0.2)',
        'state-focus': '#000000',
        'state-disabled': 'rgba(120, 120, 120, 0.5)',

        // Very Subtle Accents
        'accent-subtle': 'rgba(255, 255, 255, 0.05)',
        'accent-medium': 'rgba(255, 255, 255, 0.1)',
        'accent-strong': 'rgba(255, 255, 255, 0.15)',

        // System Colors (minimal)
        'success-accent': '#4ADE80',
        'warning-accent': '#FBBF24',
        'error-accent': '#EF4444',

        // Legacy color mappings for backward compatibility
        'primary-blue': '#9A9A9A',
        'accent-red': '#000000',
        'primary-dark': '#787878',
        'dark-accent': '#BCBCBC',
        'neutral-support': '#ABABAB',
        'cta-highlight': '#000000',
        'hover-effect': 'rgba(0, 0, 0, 0.1)',
        'accent-panels': '#BCBCBC',
        'success-green': '#4ADE80',
        'warning-orange': '#FBBF24',
        'text-primary': '#000000',
        'text-secondary': '#1a1a1a',
        'text-light': '#333333',
        'text-muted': '#787878',
        'background': '#9A9A9A',
        'foreground': '#000000',
        'background-base': '#9A9A9A',
        'background-light': '#BCBCBC',
        'background-dark': '#787878',
        'background-accent': '#BCBCBC',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #BCBCBC 0%, #ABABAB 25%, #9A9A9A 50%, #898989 75%, #787878 100%)',
        'gradient-hero': 'linear-gradient(135deg, #C0C0C0 0%, #ABABAB 25%, #969696 50%, #818181 75%, #6C6C6C 100%)',
        'gradient-section': 'linear-gradient(135deg, #B8B8B8 0%, #A8A8A8 25%, #989898 50%, #888888 75%, #787878 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #BCBCBC 0%, #ABABAB 100%)',
        'gradient-contrast': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        'gradient-primary': 'linear-gradient(135deg, #BCBCBC 0%, #ABABAB 25%, #9A9A9A 50%, #898989 75%, #787878 100%)',
        'gradient-accent': 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        'gradient-dark': 'linear-gradient(135deg, #787878 0%, #6C6C6C 100%)',
        'gradient-soft-grey': 'linear-gradient(135deg, #BCBCBC 0%, #ABABAB 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'Source Sans 3', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'SF Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
        'heading': ['Inter', 'Source Sans 3', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'Source Sans 3', 'system-ui', 'sans-serif'],
        'display': ['Roboto', 'Inter', 'Source Sans 3', 'system-ui', 'sans-serif'],
        // Legacy font mappings for backward compatibility
        'brutalist-heading': ['Inter', 'Source Sans 3', 'system-ui', 'sans-serif'],
        'brutalist-body': ['Inter', 'Source Sans 3', 'system-ui', 'sans-serif'],
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
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}

export default config