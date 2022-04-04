const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin"); //html模板

const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css代码分离

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //css代码压缩

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

        new MiniCssExtractPlugin({
            filename: "styles/[contenthash].css", // 配置打包后css文件的位置和文件名
        }),
        new CssMinimizerPlugin(),
    ],

    module: {
        rules: [
            //css sass
            {
                test: /\.(css|scss)$/,
                use: [
                    // "style-loader", //  直接将css文件嵌套进html的style标签中
                    //代码分离
                    { loader: MiniCssExtractPlugin.loader },
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
};