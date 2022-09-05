const path = require("path");
const { prefixURL } = require("./src/config");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    open: true,
    port: 4000,
    historyApiFallback: true,
    // 请求代理
    proxy: {
      [prefixURL]: {
        target: "http://21802g7k45.wicp.vip:34296",
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
          [prefixURL]: "",
        },
      },
    },
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
  // 处理 svg
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
