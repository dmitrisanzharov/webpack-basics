const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	resolve: {
		extensions: [".js"],
	},
	entry: {
		main: path.resolve(__dirname, "src/index.js"),
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
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{ loader: "babel-loader", options: { presets: ["@babel/preset-env"] } }],
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
};
