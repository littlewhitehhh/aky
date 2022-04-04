const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
    },

    output: {
        // filename: '[name].bundle.js',

        path: path.resolve(__dirname, "./dist"),
        clean: true,
        assetModuleFilename: "images/[content][ext]", //配置静态资源打包的位置和文件名
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html",
            inject: "body", // scrpit标签是在哪里载入   "body"中
        }),
    ],
};