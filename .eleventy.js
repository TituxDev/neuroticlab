module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/sitemap.xml");
  return {
    dir: {
      input: "src",     // Carpeta fuente
      output: "docs"   // Carpeta de salida
    }
  };
};
