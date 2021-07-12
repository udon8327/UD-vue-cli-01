// const path = require('path')
// const fs = require('fs')

let config = {
  // 公用路徑
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  // 建置前端靜態檔案時要擺放的目錄
  // outputDir: '../public',
  devServer: {
    // 在專案開發中如果呼叫 API 時會 pass 給這個 proxy 網址，即後台網址
    proxy: process.env.VUE_APP_DEV_PROXY,
    // 本地提供 https 憑證
    https: {
      key: process.env.VUE_APP_DEV_SSL_KEY,
      cert: process.env.VUE_APP_DEV_SSL_CERT,
      ca: process.env.VUE_APP_DEV_CA,
    },
    // 開發 server 的 domain 和 port
    host: process.env.VUE_APP_DEV_HOST,
    port: process.env.VUE_APP_DEV_PORT,
  },
  // 打包時不生成.map文件
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: { // 給sass-loader傳遞選項
        prependData: `@import "~@/assets/style/_variables.sass"`, // sass-loader v8
        // additionalData: `@import "~@/variables.sass"`,
      },
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === "development") {
      config.plugins.delete("preload");
    }
    // 將小於10kb的資源內聯
    config.module
      .rule('images')
        .use('url-loader')
          .loader('url-loader')
          .tap(options => Object.assign(options, { limit: 10240 }))
  },
  // pages: { // 多頁面應用
  //   index: {
  //     entry: 'src/index/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html',
  //     title: 'Index Page',
  //     chunks: ['index']
  //   },
  //   subpage: 'src/subpage/main.js'
  // }
}

if(process.env.VUE_APP_ROUTER_MODE === 'hash') config.publicPath = '';
if(process.env.VUE_APP_DEV_HTTPS === "false") delete config.devServer.https;

module.exports = config;