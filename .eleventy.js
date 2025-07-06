module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    dir: {
      input: "src",     // Carpeta fuente
      output: "docs"   // Carpeta de salida
    }
  };
};
