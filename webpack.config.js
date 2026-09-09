const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
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

const CopyWebpackPluginConst = new CopyWebpackPlugin({
    patterns: [
        { from: 'src/images', to: 'images' } // Copies images to dist/assets
    ]
});

const TsconfigPathsPluginConst = new TsconfigPathsPlugin({
    configFile: path.resolve(__dirname, 'tsconfig.json')
});

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, 'src/index.tsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: 'images/[name][ext]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.txt$/i,
                type: 'asset/source'
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'ts-loader' },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
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
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        static: path.resolve(__dirname, 'src'),
        port: 5000,
        open: true
    }
};
