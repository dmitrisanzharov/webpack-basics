const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        dist_js: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    }
};
