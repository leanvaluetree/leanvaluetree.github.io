module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('CNAME');

  eleventyConfig.addFilter('json', function(value) {
    console.log(value)
    try {
      return JSON.stringify(value)
    } catch (err) {}
  });
};