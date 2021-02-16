const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './index.mjs', // or .cjs
  target: "node",
  output: {
          filename: 'index.js',
          library: 'AutomergeWASM',
          path: path.resolve(__dirname, 'dist'),
          libraryTarget: 'umd',
          globalObject: 'this'
  },
  plugins: [],
  module: {
    rules: []
  },
  experiments: { asyncWebAssembly: true }
}
