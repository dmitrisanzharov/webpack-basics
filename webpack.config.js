const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'images/[hash][ext]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true 
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'MahMan',
            filename: 'index.html',
            template: 'src/template.html',
            templateParameters: {
                BUILD_TIME: 'omg it worked'
            }
        })
    ],
    devServer: {
        static: path.resolve(__dirname, 'src'),
        port: 8080,
        historyApiFallback: true
    }
}