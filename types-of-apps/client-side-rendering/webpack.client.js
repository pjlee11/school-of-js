/* 
 * Simple webpack config to build the JS files into application bundles.
 * We then add these bundles to the HTML template as <script> tags.
 */
const path = require('path');
const OptimizePlugin = require('optimize-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

module.exports = {
  entry: './src/client/index.jsx', // the file webpack should start from
  mode: process.env.NODE_ENV || 'development', // default as development mode
  output: {
    path: path.resolve(__dirname, 'build/client'), // output the bundles to build/client
    filename: 'client-app.js', // as a file called app.js
  },
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: path.resolve('public/index.html'),
    // }),
    // Inlines chunks with `client-app` in the name
    // new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/client-app/]),
    new OptimizePlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/, // match all js and jsx files
        loader: 'babel-loader', // run babel on them
        exclude: /node_modules/, // don't babel the node_modules/
      }
    ],
  },
};
