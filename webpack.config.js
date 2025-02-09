const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point (main JavaScript file)
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output folder
    publicPath: '/', // Ensures assets are loaded correctly
  },
  mode: 'development', // Set to 'production' for optimized build
  devServer: {
    static: { // this used to be called: contentBase
        directory: path.resolve(__dirname, 'dist'), // Serving static files from 'dist'
    }, // Folder to serve the content from... note: key used to be called: contentBase
    hot: true, // Enable hot module replacement for live-reloading,
    open: true, // automatically open the browser when server starts
    port: 8080, // port to run the server on
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML file
    }),
  ],
};
