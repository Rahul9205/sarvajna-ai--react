/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {

      keyframes: {
        wiggle: {
          '0%': { 'background-position': '-800px' },
          '100%' : { 'background-position': '-800px'   },
        }
        
      },
      animation: {
        wiggle: 'wiggle 3s linear infinite',
      },


      gridTemplateColumns: {
        // Define your custom values here
        'auto-fill': 'repeat(auto-fill, minmax(180px, 1fr))'},
      colors: {
        'custom-blue': '#4b90ff',
        'custom-red': '#ff5546',
      },
    },
  },
  plugins: [],
}

