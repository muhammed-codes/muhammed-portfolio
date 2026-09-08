/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-alt': 'var(--color-surface-alt)',
        border: {
          DEFAULT: 'var(--color-border)',
          strong: 'var(--color-border-strong)',
          accent: 'var(--color-border-accent)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          strong: 'var(--color-accent-strong)',
          fg: 'var(--color-accent-fg)',
        },
        inverse: {
          bg: 'var(--color-inverse-bg)',
          fg: 'var(--color-inverse-fg)',
        },
        status: {
          live: 'var(--color-status-live)',
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.0', fontWeight: '900' }],
        'display-lg': ['3rem', { lineHeight: '1.0', fontWeight: '900' }],
        'display-md': ['2rem', { lineHeight: '1.05', fontWeight: '800' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-md': ['1.125rem', { lineHeight: '1.3', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        label: ['0.75rem', { lineHeight: '1.4', fontWeight: '600' }],
        caption: ['0.6875rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      letterSpacing: {
        mono: '0.15em',
        caption: '0.1em',
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
        sm: '2px',
        md: '4px',
      },
    },
  },
  plugins: [],
};
