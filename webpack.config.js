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
            
        ]
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