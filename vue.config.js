module.exports = {
  publicPath: '', // 公用路徑
  productionSourceMap: false, // 打包時不生成.map文件
  // outputDir: '../public', // 建置前端靜態檔案時要擺放的目錄
  chainWebpack: config => {
    if (process.env.NODE_ENV === "development") {
      config.plugins.delete("preload");
    }
  }
}