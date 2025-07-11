const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // 配置跨域代理
    proxy: {
      'localApi': {
        target: 'http://localhost:15005',
        changeOrigin: true,
        pathRewrite: {
          '^/localApi': '',
        }
      }
    },
  }
})
