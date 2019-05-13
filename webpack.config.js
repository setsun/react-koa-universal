const webpack = require('webpack');
const path = require('path');
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  target: 'web',
  mode: isProduction ? 'production' : 'development',
  context: src,
  entry: 'client.tsx',
  output: {
    path: dist,
    filename: '[name]-[hash].js',
    chunkFilename: '[id].[hash].bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules)/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(graphql|g'ql)$/,
        exclude: /node_modules/,
        use: [{ loader: 'graphql-tag/loader' }],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 8888,
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
};
