/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A84FF',
          light: '#4DABFF',
          dark: '#0069D2',
        },
        secondary: {
          DEFAULT: '#5E5CE6',
          light: '#8683EB',
          dark: '#4945BF',
        },
        accent: {
          DEFAULT: '#30B0C7',
          light: '#5FC8D9',
          dark: '#278FA3',
        },
        success: {
          DEFAULT: '#34C759',
          light: '#6CD989',
          dark: '#28A447',
        },
        warning: {
          DEFAULT: '#FF9500',
          light: '#FFBA55',
          dark: '#CC7A00',
        },
        error: {
          DEFAULT: '#FF3B30',
          light: '#FF7C75',
          dark: '#CC2F26',
        },
      },
      animation: {
        'blob': 'blob 7s infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'blink': 'blink 1s infinite',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
};