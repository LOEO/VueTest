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
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            title: "Test Vue"
        })
    ]
}