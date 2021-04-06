module.exports = {
  publicPath: '', // 公用路徑
  productionSourceMap: false, // 打包時不生成.map文件
  // outputDir: '../public', // 建置前端靜態檔案時要擺放的目錄
  css: {
    loaderOptions: {
      sass: { // 給sass-loader傳遞選項
        prependData: `@import "~@/style/layout/variables.sass"`, // sass-loader v8
        // additionalData: `@import "~@/variables.sass"`,
      },
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === "development") {
      config.plugins.delete("preload");
    }
    config.module  // url-loader轉圖上限改為10kb
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