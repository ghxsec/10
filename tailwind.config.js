/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        card: 'hsl(var(--card-background))',
        accent: 'hsl(var(--accent))',
        'accent-hover': 'hsl(var(--accent-hover))',
        primary: 'hsl(var(--text-primary))',
        secondary: 'hsl(var(--text-secondary))',
        border: 'hsl(var(--border))',
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        error: 'hsl(var(--error))',
      },
      transitionDuration: {
        DEFAULT: 'var(--transition-duration)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      gridTemplateColumns: {
        'sidebar': '280px 1fr',
        'dashboard': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(138, 43, 226, 0.3)',
      },
    },
  },
  plugins: [],
};