const path = require("path");

const StyleLintPlugin = require("stylelint-webpack-plugin");

// plugin是放在plugins里面的
// loader是放在modules里面的
module.exports = function(env) {
    env = env || {development: true}
    console.log("development", env.development);
    console.log("production", env.production);
    console.log("test", env.test);
    let conf = null;
    if(env.production) {
        conf = require("./config/webpack.production")
    } else if(env.development) {
        conf = require("./config/webpack.development")
    } else {
        conf = require("./config/webpack.test")
    }
    return {
        entry: "./src/js/index.js",
        module: {
            rules: [
                // javascript 首先经过eslint-loader检测 之后交给babel-loader处理
                {
                    test: /\.(js|jsx)$/i,
                    use: [
                        // 使用babel-loader转换
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env"]
                            }
                        },
                        // 使用eslint-loader检测
                        {
                            loader: "eslint-loader",
                            options: {
                                exclude: /node_modules|bower_module/
                            }
                        }
                    ]
                },
                // css
                {
                    test: /\.css$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [require('autoprefixer')]
                            }
                        }
                    ],
                },
                // less 
                {
                    test: /\.less$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        "less-loader"
                    ]
                },
                // images
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                            {
                                loader: "url-loader",
                                // 因为现在使用dev-server 所以publicPath就没用了
                                options: {
                                    outputPath: "imgs/",
                                    limit: 4*1024
                                }
                            }
                    ]
                },
                // fonts
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/i,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                outputPath: "fonts/",
                                limit: 4*1024
                            }
                        }
                    ]
                }
            ]
        },
        ...conf
    }
}