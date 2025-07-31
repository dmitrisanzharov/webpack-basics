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
    title: 'MahMan',
    filename: 'index.html',
    template: 'src/template.html'
});

const copyWebpackPluginConst =     new CopyWebpackPlugin({
        patterns: [
            { from: 'src/assets', to: 'assets' } // Copies images to dist/assets
        ]
    })


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
    plugins: [htmlWebpackPluginConst, copyWebpackPluginConst],
    module: {
        rules: [
            {
                 test: /\.(png|svg|jpg|jpeg|gif|webp|avif)$/i,
                 type: "asset",
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
    }
};
