const common = require("./webpack.common");

const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",

    output: {
        filename: "[name].bundle.js",
    },
    devtool: "inline-source-map",
});