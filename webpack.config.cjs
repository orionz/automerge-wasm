const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './index.mjs', // or .cjs
  target: "node",
  output: {
          filename: 'index.js',
          library: 'Automerge',
          path: path.resolve(__dirname, 'dist'),
  },
  plugins: [],
  module: {
    rules: []
  },
  experiments: { asyncWebAssembly: true }
}
