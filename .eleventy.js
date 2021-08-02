module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./docs/dist"); 
  eleventyConfig.addPassthroughCopy({ "./src/index.css": "styles/index.css" }); 
  eleventyConfig.setUseGitIgnore(false);

  return {
    dir: {
      input: "docs"
    }
  }
}
