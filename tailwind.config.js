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
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        background: '#ffffff',
        text: '#111827',
        accent: {
          blue: '#3b82f6',
          green: '#10b981',
          orange: '#f59e0b',
          purple: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Inter','system-ui','sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem',{lineHeight: '1rem'}],
        'sm': ['0.875rem',{lineHeight: '1.25rem'}],
        'base': ['0.9rem',{lineHeight: '1.4rem'}],
        'lg': ['1.05rem',{lineHeight: '1.5rem'}],
        'xl': ['1.15rem',{lineHeight: '1.6rem'}],
        '2xl': ['1.4rem',{lineHeight: '1.8rem'}],
        '3xl': ['1.75rem',{lineHeight: '2.1rem'}],
        '4xl': ['2.1rem',{lineHeight: '2.5rem'}],
        '5xl': ['2.8rem',{lineHeight: '3.2rem'}],
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