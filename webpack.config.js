const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProduction ? 'production' : 'development',
    context: __dirname + '/src',
    entry: {
        bundle: "./yet-another-todo-list.js",
        demo  : "./demo.js",
    },
    output: {
        path    : __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        "rules": [
            {
                "test": /\.js$/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env",
                            "stage-0"
                        ]
                    }
                }
            },
            {
                "test": /\.s?css$/,
                "use": [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './*.html' },
        ]),
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
            chunkFilename: '[id].css',
        })
    ]
};