import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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

export default {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [htmlWebpackPluginConst],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource'
            }
        ]
    }
};
