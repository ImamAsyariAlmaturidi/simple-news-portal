/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#1c1c1c',
          text: '#E0E0E0',
          secondary: '#444444',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        bebas: ["Bebas Neue", 'sans-serif']
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}