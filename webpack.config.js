const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool: "source-map",
	mode: "development",
	entry: {
		main: path.resolve(__dirname, "src/index.tsx"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		clean: true,
		assetModuleFilename: "images/[name][ext]",
	},
	devServer: {
		static: path.resolve(__dirname, "src"),
		port: 3000,
		hot: true,
		open: true,
		compress: true,
		historyApiFallback: true,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(ts|tsx)$/, // Apply these rules to .ts and .tsx files
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-react"],
						},
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Victors React App",
			filename: "index.html",
			template: "src/template.html",
		}),
	],
};
