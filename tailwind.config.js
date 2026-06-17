/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        rose: {
          50: '#FDF6F0',
          100: '#FAE8D8',
          200: '#F5CEB0',
          300: '#EFB08A',
          400: '#E8956A',
          500: '#C9956C',
          600: '#A67A55',
          700: '#8B3852',
          800: '#6B2840',
          900: '#3D1525',
          950: '#200B14',
        },
        blush: {
          50: '#FFF0F4',
          100: '#FFD6E3',
          200: '#F2C4D0',
          300: '#E8A4B8',
          400: '#D4799A',
          500: '#C0587E',
        },
        cream: {
          50: '#FFFCF9',
          100: '#FDF6F0',
          200: '#F8EBE0',
          300: '#F0D9C8',
        },
        gold: {
          300: '#F0D98A',
          400: '#E8C87A',
          500: '#D4A847',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'scale-in': 'scaleIn 0.4s ease forwards',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.88)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(201, 149, 108, 0.35)',
        'glow-lg': '0 0 70px rgba(201, 149, 108, 0.45)',
        card: '0 6px 36px rgba(61, 21, 37, 0.07)',
        'card-hover': '0 18px 56px rgba(61, 21, 37, 0.14)',
      },
    },
  },
  plugins: [],
};
