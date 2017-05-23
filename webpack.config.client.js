const path = require('path');
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist/client');

module.exports = {
  target: 'web',
  context: src,
  entry: './client.js',
  output: {
    path: dist,
    filename: 'client.js',
    publicPath: '/'
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map'
};
