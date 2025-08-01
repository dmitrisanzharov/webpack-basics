import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
console.log('__filename: ', __filename);
const __dirname = path.dirname(__filename);
// console.log('__dirname: ', __dirname);
// console.log('process', process.env);

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

export default {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [htmlWebpackPluginConst],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp|avif)$/i,
                type: 'asset'
            },
            {
                test: /\.(scss|sass)$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
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
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.avif'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@assets': path.resolve(__dirname, 'src/assets'),
        }
    },
    devServer: {
        static: path.resolve(__dirname, 'src'),
        hot: true,
        port: 9000,
        open: true,
        compress: true,
        historyApiFallback: true
    }
};
