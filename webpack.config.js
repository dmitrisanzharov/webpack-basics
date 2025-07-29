// const path = require('path');
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
console.log("__filename: ", __filename);
const __dirname = path.dirname(__filename);
console.log("__dirname: ", __dirname);
// console.log('process', process.env);

export default {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
};
