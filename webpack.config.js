const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.bundle.js',
    publicPath: process.env.NODE_ENV === 'production' ? '/isabella/' : '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      name: 'index.html',
      inject: false,
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: 'CNAME', to: '.' },
    //   ],
    // }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "./")
    },
    port: 3000,
  },
};
