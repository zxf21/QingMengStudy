const path = require('path');//在node-modules中找
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',//用于开发环境 
  //cheap-module-source-map  用于生产环境  
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.jpg$/,
      //   use: {
      //     loader: 'file-loader'
      //   }
      // },
      {
        test: /\.jpg$/,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'img',
            name: '[name]_[hash].[ext]',
            limit: 10240
          }
        }
      },
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader",
        // options: 
        //   {
        //     "presets": [
        //       ["@babel/preset-env",{
        //       "useBuiltIns": 'usage'
        //     }]]
        //   }
        // options: {         
        //     "plugins": [
        //       [
        //         "@babel/plugin-transform-runtime",
        //         {
        //           "absoluteRuntime": false,
        //           "corejs": 3,
        //           "helpers": true,
        //           "regenerator": true,
        //           "useESModules": false,
        //           "version": "7.0.0-beta.0"
        //         }
        //       ]
        //     ]
        // }
       }
    ]
  },
  plugins:[
    //会在打包结束后自动生成html文件，并把打包生成的文件自动引入到这个html文件中
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true,
    hotOnly: true
    // proxy: {
    //   "/api": "http://localhost:3000"
    // }    
  }
}