const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// console.log("path: ", path);

console.log(__dirname);
console.log(__filename);

const htmlWebpackConst = new HtmlWebpackPlugin({  
    title: 'foo page',
    filename: 'index.html',
    template: 'src/index.html'
})

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
        blah: path.resolve(__dirname, 'src/foo.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: 'images/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        htmlWebpackConst
    ]
};
