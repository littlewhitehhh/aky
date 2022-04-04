const common = require("./webpack.common");

const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash:8].js",
    },

    devServer: {
        static: "./dist",
        port: 8880,
        hot: true,
    },

    optimization: {
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    },
});