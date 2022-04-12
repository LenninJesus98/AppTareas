const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 esModule: false,
            //                 name: 'assets/[name].[ext]'
            //             }
            //         }
            //     ]
            // }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        })
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },

}

