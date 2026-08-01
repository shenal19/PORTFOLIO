/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0f1c',
        surface: '#111a2c',
        surface2: '#182238',
        border: '#263252',
        ink: '#eaedf5',
        muted: '#8d96ac',
        gold: '#e3a94b',
        teal: '#45c4b0',
      },
      fontFamily: {
        display: ['var(--font-manrope)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(234,237,245,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(234,237,245,0.035) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      keyframes: {
        'flow-move': {
          to: { strokeDashoffset: '-28' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
      },
      animation: {
        'flow-move': 'flow-move 1.4s linear infinite',
        'pulse-dot': 'pulse-dot 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
