module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: "#E44200"
      },
      
      fontSize: {
        '12xl': '12rem',
        '14xl': '14rem',
        '11xl': '10rem',
        '10xl': '9rem',
      },
      
    },
    fontFamily: {
      regular: ['League Gothic Regular'],
      condensed: ['League Gothic Condensed']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
