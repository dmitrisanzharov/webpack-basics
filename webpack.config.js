const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// console.log("path: ", path);

console.log(__dirname);
console.log(__filename);

const htmlWebpackConst = new HtmlWebpackPlugin({
    title: 'foo page',
    filename: 'index.html',
    template: 'src/index.html',
    templateParameters: {
        ANY_VAR: 'omg RUNTIME',
        MY_VAR: 'my var 2'
    }
});

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
        blah: path.resolve(__dirname, 'src/foo.js'),
        yo: path.resolve(__dirname, 'src/bar.js')
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
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.(scss|sass)$/i,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
            }
        ]
    },
    plugins: [htmlWebpackConst],
    resolve: {
        extensions: ['.js'],
        alias: {
            '@allJs': path.resolve(__dirname, 'src/allJs')
        }
    }
};
