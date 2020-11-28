const path = require("path");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    // 因为是开发环境就不需要path 只需要filename
    output: {
        filename: "bundle.js"
    },
    plugins: [
        new StyleLintPlugin({
            files: ["**/*.css", "**/*.less", "**/*.scss", "**/*.html", "**/*.htm", "**/*.vue"] // **代表任意目录 *.css只能在根目录里面找 */*.css只能在一层目录下找 **/*.css能在任意目录下找
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../idnex.html")
        })
    ],
    // 因为是开发 需要看到源码 此时会增大体积
    devtool: "source-map"
}