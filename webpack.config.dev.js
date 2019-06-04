var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var APP_PATH = path.resolve(__dirname, 'src');
var DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    index: path.resolve(APP_PATH, 'index')
  },
  output: {
    path: DIST_PATH,
    filename: 'demo.js'
  },
  resolve: {
    extensions: ['.js', '.css']
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      use: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    }, {
      test: /\.jpg$/,
      use: 'file-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENT: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'react-like demo',
      template: path.resolve(APP_PATH, 'index.html'),
      filename: 'index.html',
      chunks: ['index'],
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: path.resolve('./'),
    port: 9090,
    inline: true,
    hot: true
  }
}
