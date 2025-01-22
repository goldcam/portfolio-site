/** @type {import('tailwindcss').Config} */

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'darkBlack': 'var(--text)',
      'whiteish':'var(--accent)',
      'teal': 'var(--primary)',
      'tealLight': 'var(--secondary)'

      
    },
    fontFamily: {
      'montserrat':  ['"Montserrat"', 'sans-serif'],
      'oswald': ['"Oswald"', '"Arial"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // require('tailwindcss-dark-mode')
  ],
  darkMode: 'selector',
}

