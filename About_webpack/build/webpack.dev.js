const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  //生产环境下的最佳选择 'cheap-module-source-map'.

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  modules: {
    rules: [
      {
        test:/\.css$/,
        use:['style-loader','css-loader']//loader的执行顺序时候从后向前的
      },
      {
        test:/\.scss$/,
        use:['style-loader','css-loader','postcss-loader','sass-loader']//loader的执行顺序时候从后向前的
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    // hotOnly: true
    // proxy: {
    //   "/api": "http://localhost:3000"
    // }    
  }
}

module.exports = merge(commonConfig,devConfig)