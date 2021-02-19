module.exports = {
  purge: [
    './_site/**/*.html',
    './**/*.md',
    './**/*.njk'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      '-90': '-90deg',
    },
    extend: {

    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
