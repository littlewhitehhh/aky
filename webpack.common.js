const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin"); //html模板

const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css代码分离

// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //css代码压缩

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
                    "postcss-loader",
                ],
            },

            // images
            {
                test: /\.(png|webp)$/,
                type: "asset/resource",
                generator: {
                    filename: "images/[content][ext]", //优先级高
                },
            },
            {
                test: /\.jpg$/,
                type: "asset", //在asset/resouce 和asset/inline之间进行选择   资源大于8k resource  小于8k  inline
                parser: {
                    //修改选择的规则
                    dataUrlCondition: {
                        maxSize: 4 * 1024 * 1024,
                    },
                },
            },
            {
                test: /\.svg$/,
                type: "asset/inline", //资源的的Data Url   base64文件
            },
            {
                test: /\.txt$/,
                type: "asset/source", //导出资源源代码
            },
            //字体图标
            {
                test: /.(woff|woff2|eot|ttf|otf)$/i,
                include: [path.resolve(__dirname, "./src")],
                type: "asset/resource",
                generator: {
                    filename: "iconfont/[hash][ext][query]", // 局部指定输出位置
                },
            },

            // js
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-transform-runtime"],
                    },
                },
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
};