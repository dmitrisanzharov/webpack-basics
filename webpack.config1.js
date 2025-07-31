const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// __dirname and __filename already exist in CommonJS
console.log('__filename: ', __filename);

const htmlWebpackPluginConst = new HtmlWebpackPlugin({
    title: 'My Webpack App',
    filename: 'index.html',
    template: 'src/template.html',
    templateParameters: {
        BUILD_TIME_ONE: 'mahMan'
    }
});

const copyWebpackPluginConst = new CopyWebpackPlugin({
    patterns: [
        { from: 'src/foo', to: 'assets' } // Copies images to dist/assets
    ]
});

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
        htmlWebpackPluginConst,
        copyWebpackPluginConst
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp|avif)$/i,
                type: 'asset'
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.avif']
    }
};
