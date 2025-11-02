const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log('ran', __filename);

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/index.html'),
    filename: 'index.html'
});

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [htmlPlugin],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src')
        },
        port: 3000,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                exclude: (filepath) => console.log('test',filepath),
            }
        ]
    }
};
