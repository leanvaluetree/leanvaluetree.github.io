const shortcodes = require('./shortcodes')
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('CNAME');

  eleventyConfig.addFilter('json', function(value) {
    // console.log(value)
    try {
      return JSON.stringify(value, null, 2)
    } catch (err) {}
  });

  eleventyConfig.addShortcode('properties', shortcodes.properties);

  eleventyConfig.addShortcode('test', function(tool) {
    return `
    <div>
      <h1>
        Test
      </h1>
      <pre>${JSON.stringify(tool, null, 2)}</pre>
    </div>`
  });
};