let path = require("path");
let htmlWebpackPlugin = require("html-webpack-plugin");
let webpack = require("webpack");
module.exports = {
    entry: {
        main: "./src/js/main.js"
    },
    output: {
        filename: "js/[name]-[hash].js",
        path: path.resolve(__dirname, "./dist")
    },
    devtool: "cheap-eval-source-map",
    plugins: [
        new htmlWebpackPlugin({
            css:"./src/style/css/main.css",
            template: "./src/index.html",
            title: "Test Vue",
            output:"[name]-[hash].html"
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
            loader: "style-loader!css-loader"
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: {
                presets: ['env']
            }
        }

        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}