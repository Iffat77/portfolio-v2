/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'font-work': ['Work Sans', 'sans-serif'],
      'font-kanit': ['Kanit', 'sans-serif'],
      'font-michroma': ['Michroma', 'sans-serif'],
      'font-saira': ['Saira', 'sans-serif'],
    },
    extend: {
      colors: {
        neonGreen: '#39ff14',
      },
    },
  },
  plugins: [],
}