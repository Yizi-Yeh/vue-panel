module.exports = {

  devServer: {
    // 設定完成後重啟npm
    proxy: {
      // 設定代理
      '/api': {
        target: 'http://220.133.51.96:1113/api/personwhitelist', // 介面的域名
        changeOrigin: true,
        ws: true,
        secure: false,
        ignorePath: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  publicPath: './'
}
