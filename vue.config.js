const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //配置跨域
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://mock.apifox.com/m1/1262975-0-default',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
})
