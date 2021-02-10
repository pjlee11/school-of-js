const path = require('path');

module.exports = {
  entry: './src/server/index.js', // the file webpack should start from
  mode: process.env.NODE_ENV || 'development', // default as development mode
  target: 'node', // the environment the output bundle will be run in
  output: {
    path: path.resolve('build/server'), // output the bundles to build/server
    filename: 'index.js' // as a file called app.js
  },

  module: {
    rules: [
      {
        test: /\.js$/, // match all js
        use: 'babel-loader' // run babel on them
      }
    ]
  }
};
