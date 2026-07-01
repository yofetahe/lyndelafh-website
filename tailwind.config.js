/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f3',
          100: '#e6ede2',
          200: '#cdd9c5',
          300: '#a9bd9c',
          400: '#859d72',
          500: '#677f54',
          600: '#506540',
          700: '#3f5034',
          800: '#33402c',
          900: '#2b3526',
          950: '#161d13',
        },
        cream: {
          50: '#fdfbf7',
          100: '#faf4e8',
          200: '#f4e8cf',
          300: '#ecd6ad',
          400: '#e0bd80',
          500: '#d4a456',
          600: '#c88e3c',
          700: '#a66e31',
          800: '#87572b',
          900: '#6f4826',
        },
        warm: {
          50: '#fbf8f5',
          100: '#f4ece3',
          200: '#e8d7c6',
          300: '#d9bba0',
          400: '#c79874',
          500: '#b87d54',
          600: '#a86647',
          700: '#8c513c',
          800: '#734336',
          900: '#5f3930',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};
