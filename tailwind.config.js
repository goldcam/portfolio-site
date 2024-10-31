module.exports = {
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
      'montserrat':  ['"Montserrat"', 'sans-serif']
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
