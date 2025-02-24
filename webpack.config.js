const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
      
        assetModuleFilename: 'images/[hash][ext]'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: "babel-loader",
              options: {
                cacheDirectory: true, // Enables caching of transpiled files
              },
            },
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: "asset/resource"
          }
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Webpack Page One',
            filename: 'index.html',
            template: 'src/template.html',
            templateParameters: {
                BUILD_TIME: 'anythingIWant'
            }
        })
    ]
}