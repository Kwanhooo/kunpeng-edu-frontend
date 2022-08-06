const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.ts', '.vue', '.jsx', '.tsx', '.json'],
    },
  },
  transpileDependencies: true,
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:9090',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
})
