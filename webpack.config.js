const path = require("path");
console.log('dirname', __dirname);
console.log('filename', __filename);

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/index.js")
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
};
