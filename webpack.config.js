const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	mode: "development",
	entry: {
		main: path.resolve(__dirname, "src/index.tsx"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		assetModuleFilename: "images/[hash][ext]",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(scss|sass)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(tsx|ts)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
							cacheDirectory: true,
						},
					},
                    {
                        loader: "ts-loader"
                    }
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "MahMan",
			filename: "index.html",
			template: "src/template.html",
			templateParameters: {
				BUILD_TIME: "omg it worked",
			},
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: "src/assets", to: "assets" }],
		}),
		new Dotenv()
	],
	devServer: {
		static: path.resolve(__dirname, "src"),
		port: 8080,
		historyApiFallback: true,
	},
};
