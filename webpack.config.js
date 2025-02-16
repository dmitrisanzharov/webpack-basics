const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
    devtool: "source-map",
	resolve: {
		extensions: [".js", ".ts"],
	},
	entry: {
		main: path.resolve(__dirname, "src/index.ts"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		clean: true,
		assetModuleFilename: "images/[name][ext]",
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(js|ts)$/,
				exclude: /node_modules/,
				use: [{ loader: "babel-loader", options: { presets: ["@babel/preset-env", "@babel/preset-typescript"] } }],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "My Page",
			filename: "index.html",
			template: "src/index.html",
		}),
	],
    devServer: {
        static: path.resolve(__dirname, "src"),
        open: true,
        compress: true,
        historyApiFallback: true
    }
};
