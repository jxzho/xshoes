const path = require("path");
const resolve = pathname => {
  return path.join(__dirname, pathname);
};

module.exports = {
  baseUrl: "/",
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: []
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.resolve(__dirname, "src/assets/styles/theme.less"),
        path.resolve(__dirname, "src/assets/styles/mixins.less")
      ]
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("common", resolve("src/common"));
  }
};
