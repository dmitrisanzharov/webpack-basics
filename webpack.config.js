const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool: "source-map",
	mode: "development",
	entry: {
		main: path.resolve(__dirname, "src/index.ts"),
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
		extensions: [".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(js|ts)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env", "@babel/preset-typescript"],
						},
					},
				],
			},
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: "asset/resource",
            }
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "omg omg 2",
			filename: "index.html",
			template: "src/template.html",
		}),
	],
};
