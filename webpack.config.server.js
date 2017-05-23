const nodeExternals = require('webpack-node-externals');
const path = require('path');
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  context: src,
  entry: './server.js',
  output: {
    path: dist,
    filename: 'server.js'
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: nodeExternals(),
  devtool: 'source-map'
};
