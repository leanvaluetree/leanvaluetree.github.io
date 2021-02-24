module.exports = {
  purge: [
    './_site/**/*.html',
    './**/*.md',
    './shortcodes/*.js',
    './**/*.njk'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
