const shortcodes = require('./shortcodes')
const CleanCSS = require("clean-css")
const crypto = require("crypto")
const cache = new Map()
const createHash = str => crypto.createHash("sha256").update(str).digest("hex")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('fonts')
  eleventyConfig.addPassthroughCopy('js')
  eleventyConfig.addPassthroughCopy('CNAME')
  eleventyConfig.addPassthroughCopy('animations')

  eleventyConfig.addFilter('json', value => JSON.stringify(value, null, 2))
  eleventyConfig.addFilter('firstSentence', value => value.split('.')[0])
  eleventyConfig.addFilter("cssmin", function(code) {
    const hash = createHash(code)
    if (cache.has(hash)) return cache.get(hash)
    const styles = new CleanCSS({}).minify(code).styles
    cache.set(hash, styles)
    return styles
  })

  eleventyConfig.addFilter("next", function(tools, tool) {
    const index = tools.findIndex((t) => t.ID === tool.ID) + 1
    return tools[index]
  })
  eleventyConfig.addFilter("previous", function(tools, tool) {
    const index = tools.findIndex((t) => t.ID === tool.ID) - 1
    return tools[index]
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