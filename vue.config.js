const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: `@import "@/styles/index.scss";`,
  //     },
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias
    .set('@',resolve('./src'))
  }
}