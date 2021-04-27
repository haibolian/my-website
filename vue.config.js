const { resolve } = require('path')
const path = require('path')
module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}