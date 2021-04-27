const { resolve } = require('path')
const path = require('path')
module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  chainWebpack: config => {
    config.module
    .rule("svg")
    .exclude.add(resolve("src/icons"))
    .end();
    config.module
    .rule("icons")
    .test(/\.svg$/)
    .include.add(resolve("src/icons"))
    .end()
    .use("svg-sprite-loader")
    .loader("svg-sprite-loader")
    .options({
      symbolId: "icon-[name]",
    })
    .end();
  }
}