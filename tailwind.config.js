/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#14F195',
        'primary-dark': '#10B981',
        'background': '#000000',
        'surface': '#121212',
        'surface-highlight': '#0D2818',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
      animation: {
        'terminal-cursor': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.8s ease-in forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(20, 241, 149, 0.5)',
        'card': '0 10px 25px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-green': 'linear-gradient(90deg, #14F195 0%, #0D2818 100%)',
      },
    },
  },
  plugins: [],
};