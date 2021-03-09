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
      spacing: {
        '120': '30rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
