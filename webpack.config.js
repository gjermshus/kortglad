const webpack = require('webpack');
const path = require('path');

module.exports = {
  // put sourcemaps inline
  devtool: 'eval',

  // entry point of our application, within the `src` directory (which we add to resolve.modules below):
  entry: path.resolve(__dirname, "src/main/frontend/index.tsx"),
 
  // configure the output directory and publicPath for the devServer
  output: {
    filename: 'kortglad.js',
    publicPath: '/', // path.resolve(__dirname, 'src/main/webapp/static'),
    path: path.resolve(__dirname, 'src/main/webapp/static'),
  },

  // configure the dev server to run
  devServer: {
    port: 5000,
    historyApiFallback: true,
    inline: true,
    contentBase: path.resolve(__dirname, 'src/main/webapp/static')
  },

  // tell Webpack to load TypeScript files
  resolve: {
    // Look for modules in .ts(x) files first, then .js
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      // .ts(x) files should first pass through the Typescript loader, and then through babel
      {
        test: /\.tsx?$/,
        exclude: "/node_modules",
        loaders: ['babel-loader', 'ts-loader']
      },
    ],
  }
};