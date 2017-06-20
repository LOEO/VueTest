let path = require("path");
let htmlWebpackPlugin = require("html-webpack-plugin");
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
        })
    ],
    devServer: {
        contentBase: "./dist",
        colors: true,
        inline: true,
        historyApiFallback: true
    }
}