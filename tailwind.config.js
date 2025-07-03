/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        background: '#ffffff',
        text: '#0f172a',
        accent: {
          blue: '#2563eb',
          green: '#059669',
          orange: '#d97706',
          purple: '#7c3aed',
          red: '#dc2626',
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)','system-ui','sans-serif'],
        heading: ['var(--font-montserrat)','system-ui','sans-serif'],
        body: ['var(--font-nunito)','system-ui','sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem',{lineHeight: '1rem'}],
        'sm': ['0.875rem',{lineHeight: '1.25rem'}],
        'base': ['1rem',{lineHeight: '1.5rem'}],
        'lg': ['1.125rem',{lineHeight: '1.75rem'}],
        'xl': ['1.25rem',{lineHeight: '1.75rem'}],
        '2xl': ['1.5rem',{lineHeight: '2rem'}],
        '3xl': ['1.875rem',{lineHeight: '2.25rem'}],
        '4xl': ['2.25rem',{lineHeight: '2.5rem'}],
        '5xl': ['3rem',{lineHeight: '1'}],
        '6xl': ['3.75rem',{lineHeight: '1'}],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-soft': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        slideUp: {
          '0%': {transform: 'translateY(20px)',opacity: '0'},
          '100%': {transform: 'translateY(0)',opacity: '1'},
        },
      },
    },
  },
  plugins: [],
} 