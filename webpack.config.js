const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlPluginConst = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/index.html'),
    filename: 'index.html',
    title: 'omg',
    templateParameters: {
        FOO_BAR: 'anythingIWant_really'
    }
});

const devServerConfigs = {
    static: {
        directory: path.resolve(__dirname, 'src')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
};

module.exports = {
    devtool: "source-map",
    entry: {
        main: path.resolve(__dirname, 'src/index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: 'images/[name][ext]'
    },
    resolve: {
        extensions: ['.*', '.ts', '.js', '.svg'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@images': path.resolve(__dirname, 'src/images')
        }
    },
    plugins: [htmlPluginConst],

    devServer: devServerConfigs,
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /.(ts|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript'],
                        cacheDirectory: true
                    }
                }
            }
        ]
    }
};
