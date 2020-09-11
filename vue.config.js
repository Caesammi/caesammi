module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? './'
      : '/',
  outputDir: 'myBuild',
  assetsDir: 'myStatic',
  devServer: {
    open:true
  }
}
