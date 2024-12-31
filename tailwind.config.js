/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        script: ['SignPainter', 'cursive'],
        brand: ['Edwardian Script ITC', 'cursive'],
      },
      colors: {
        brown: {
          800: '#3E2723',
        },
      },
    },
  },
  plugins: [],
};