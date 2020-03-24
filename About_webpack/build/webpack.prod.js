const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  //生产环境下的最佳选择 'cheap-module-source-map'.
  module: {
    rules: [
      {
        test:/\.css$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true
            }
          }
          ,'css-loader',]//loader的执行顺序时候从后向前的
      },
      {
        test:/\.scss$/,
        use:[{
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: true
          }
        },'css-loader','postcss-loader','sass-loader']//loader的执行顺序时候从后向前的
      },
    ]
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}

module.exports = merge(commonConfig,prodConfig)