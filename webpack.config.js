const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
	devtool: false,
    optimization: {
        minimize: false
    },
	mode: "development",
	cache: {
		type: "memory",
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	entry: {
		main: path.resolve(__dirname, "src/index.tsx"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		assetModuleFilename: "images/[name][ext]",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: "asset/resource",
			},
			{
				test: /\.scss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(ts|tsx)$/, // TypeScript files
				use: [
					{
						loader: "babel-loader", // Babel for modern JS features
						options: {
							cacheDirectory: true,
							presets: [
								"@babel/preset-env", // Modern JS syntax
								"@babel/preset-react", // React JSX support
								"@babel/preset-typescript", // TypeScript support
							],
						},
					},
					"ts-loader", // TypeScript transpilation and type checking
				],
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "React TypeScript Project",
			template: "src/template.html",
			filename: "index.html",
		}),
		new Dotenv(),
        new ReactRefreshWebpackPlugin(),
	],
	devServer: {
		compress: true,
		static: path.resolve(__dirname, "src"),
		port: 5000,
		open: false,
		historyApiFallback: true,
	},
};
