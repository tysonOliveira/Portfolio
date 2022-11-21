/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Chakra Petch, sans-serif'
      },
      backgroundImage: {
        banner: 'url(/bannerEditado.png)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
