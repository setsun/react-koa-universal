const webpack = require('webpack');
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
  entry: 'app.server.js',
  output: {
    path: dist,
    filename: 'server.js'
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src'),
    ],
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  externals: nodeExternals(),
  devtool: 'source-map'
};
