/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#E36125',
        },
        background: {
          800: '#0f0f0f',
          900: '#080808'
        },
      },
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
