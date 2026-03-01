import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("dirname", __dirname);
console.log("filename", __filename);

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    title: "MahMan",
    filename: "index.html",
    template: "src/index.html",
    templateParameters: {
        DIMI_ONE: "DimiOne"
    }
});

const TsconfigPathsPluginConst = new TsconfigPathsPlugin({
    configFile: path.resolve(__dirname, "tsconfig.json")
});

export default {
    devtool: "source-map",
    entry: {
        main: path.resolve(__dirname, "src/index.tsx")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        assetModuleFilename: "assets/[name][ext]"
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg)/,
                type: "asset/resource"
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    { loader: "ts-loader" },
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                                "@babel/preset-typescript"
                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [TsconfigPathsPluginConst]
        // alias: {
        //     '@myAssets': path.resolve(__dirname, "src/assets"),
        //     '@core': path.resolve(__dirname, "src"),
        // }
    },
    devServer: {
        static: path.resolve(__dirname, "src"),
        open: true
    }
};
