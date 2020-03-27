const path = require("path")
const webpack = require("webpack")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const BrotliPlugin = require("brotli-webpack-plugin")

module.exports = env => {
    return {
        entry: {
            main: ["./src/index.js"]
        },
        mode: "production",
        output: {
            filename: "[name]-bundle.js",
            path: path.resolve(__dirname, "../dist"),
            publicPath: "/"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader"
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: MiniCSSExtractPlugin.loader },
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "images/[name].[ext]"
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCSSExtractPlugin(),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require("cssnano"),
                cssProcessorOptions: { discardComments: { removeAll: true } },
                canPrint: true
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify(env.NODE_ENV)
                }
            }),
            new HTMLWebpackPlugin({
                template: "./public/index.html",
                inject: true,
                title: "Restaurant"
            }),
            new UglifyJSPlugin(),
            new CompressionPlugin({
                algorithm: "gzip"
            }),
            new BrotliPlugin()
        ]
    }
}