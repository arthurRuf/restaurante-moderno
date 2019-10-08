const path = require('path');
const slsw = require('serverless-webpack');

const nodeExternals = require('webpack-node-externals');

module.exports = {
  devtool: 'source-map',
  entry: slsw.lib.entries,
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  externals: [nodeExternals()],
  optimization: {
    // Do not minimize the code.
    minimize: !slsw.lib.webpack.isLocal
  },
  performance: {
    // Turn off size warnings for entry points
    hints: slsw.lib.webpack.isLocal ? false : "warning"
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, './dist/'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};