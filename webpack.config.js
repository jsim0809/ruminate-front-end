const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'client', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  mode: 'development',
};
