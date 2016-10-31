var path = require('path');
var webpack = require('webpack');

var config = {
  entry: path.resolve(__dirname, './src/SmartGesture/index.js'),
  output: {
    path: path.resolve(__dirname, './lib'),
    library: 'react-smart-gesture',
    libraryTarget: 'umd',
    filename: 'app.js'
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  externals: {
    'react'        : 'umd react',
    'react-dom'    : 'umd react-dom',
    'smart-gesture': 'umd smart-gesture'
  }
};

module.exports = config;
