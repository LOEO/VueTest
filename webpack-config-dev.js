let path = require("path");
let htmlWebpackPlugin = require("html-webpack-plugin");
let webpack = require("webpack");
module.exports = {
    entry: {
        main: "./src/js/main.js"
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "./dist")
    },
    devtool: "cheap-eval-source-map",
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            title: "Test Vue"
        }),
        new webpack.HotModuleReplacementPlugin() //热加载插件
    ],
    devServer: {
        contentBase: "./dist",
        inline: true,
        historyApiFallback: true,
        hot: true
    },
    module: {
        loaders: [{
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    }
}