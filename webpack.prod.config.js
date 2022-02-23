const path = require('path');
const sass = require('sass');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    compress: {
                        inline: false,
                        unused: true
                    },
                    output: {
                        comments: false,
                        beautify: false
                    }
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                exclude: /(node_modules)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: {
                                localIdentName: '[local]__[hash:base64]'
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: sass
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production'),
            IS_LOGGER_ENABLED: JSON.stringify(false),
            SERVER_HOST_NAME: JSON.stringify('')
        }),
        new HtmlWebpackPlugin({
            inject: false,
            timestamp: Date.now(),
            template: path.resolve(__dirname, 'src/html/index.html'),
            filename: path.resolve(__dirname, 'dist/app/index.html'),
            apiURL: '/js/api.min.js'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/html/cache.html'),
            filename: path.resolve(__dirname, 'dist/app/cache.html'),
        })
    ]
};
