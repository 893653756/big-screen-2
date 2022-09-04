const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    open: true,
    // hot: true,
    port: 4000,
    historyApiFallback: true,
  },
  configureWebpack() {
    return {
      resolve: {
        alias: {
          "~": resolve("."),
          "@": resolve("src"),
        },
      },
    };
  },
  chainWebpack(config) {
    config.resolve.symlinks(true);
    config.module.rule("svg").exclude.add(resolve("src/icons"));
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" })
      .end();
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/utils.scss";`,
      },
    },
  },
};
