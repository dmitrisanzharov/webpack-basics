const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'images/[name][ext]',
        clean: true
    },
    module: {
        rules: [
          {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: "asset/resource"
          },
          {
            test: /\.scss$/i,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'},
                {loader: 'sass-loader'}
            ]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        cacheDirectory: true,
                    }
                }
            ]
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
    ],
    devServer: {
        static: path.resolve(__dirname, 'src'),
        port: 5000,
        open: true,
        compress: true,
        historyApiFallback: true
    }
}