const shortcodes = require('./shortcodes')
const CleanCSS = require("clean-css")
const crypto = require("crypto")
const cache = new Map()
const createHash = str => crypto.createHash("sha256").update(str).digest("hex")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('CNAME')

  eleventyConfig.addFilter('json', function(value) {
    // console.log(value)
    try {
      return JSON.stringify(value, null, 2)
    } catch (err) {}
  })
  eleventyConfig.addFilter("cssmin", function(code) {
    const hash = createHash(code)
    if (cache.has(hash)) return cache.get(hash)
    const styles = new CleanCSS({}).minify(code).styles
    cache.set(hash, styles)
    return styles
  })

  Object.keys(shortcodes).forEach(s => {
    eleventyConfig.addShortcode(s, shortcodes[s])
  })

  eleventyConfig.addShortcode('test', function(tool) {
    return `
    <div>
      <h1>
        Test
      </h1>
      <pre>${JSON.stringify(tool, null, 2)}</pre>
    </div>`
  })
}