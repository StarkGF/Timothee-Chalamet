
module.exports = {
  devServer: {
    port: 8000,
    proxy: {
      '/rng': {
        target: 'http://121.199.2.83',
        changeOrigin: true,
        pathRewrite: { '^/rng': '' }
        // ws: true;
      }
    }
  },
  publicPath: './'
}

// // http://121.199.2.83
