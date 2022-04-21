module.exports = {
    lintOnSave: false,
    devServer: {
      proxy:'https://c3po.roboticamisiones.com/'
    },
    publicPath: process.env.NODE_ENV === 'production'
      ? '/dashboard/'
      : '/',
      outputDir: 'docs'
  };