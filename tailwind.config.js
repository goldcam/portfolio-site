/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: [],
  theme: {
    colors: {
      'darkBackground': '#020b06',
      'whiteish':'#ccd7f5',
      'teal': '#038C8C'
      
    },
    fontFamily: {
      'montserrat':  ['"Montserrat"', 'sans-serif'],
      'oswald': ['"Oswald"', '"Arial"', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    // backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd']
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // require('tailwindcss-dark-mode')
  ],
}

