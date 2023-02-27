const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  
  publicPath: './',
  transpileDependencies: true,
  lintOnSave: false,
  devServer:{
    proxy: 'http://mewtopia.cn:1234',
    //打包配置文件
  }
  
})
