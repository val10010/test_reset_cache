const fs = require('fs');
const path = require('path');
const sass = require('sass');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const serverHostname = 'https://core3-qa08.playtechgaming.com';
const localConfig = fs.existsSync('./webpack.local.config.js') ? require('./webpack.local.config.js') : {};


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8000,
        publicPath: '/',
        contentBase: path.join(__dirname, 'dist/app')
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
                                localIdentName: '[path][name]__[local]'
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
        new webpack.DefinePlugin({
            ENV: JSON.stringify('development'),
            IS_LOGGER_ENABLED: JSON.stringify(true),
            SERVER_HOST_NAME: JSON.stringify(serverHostname)
        }),
        new HtmlWebpackPlugin({
            inject: false,
            timestamp: Date.now(),
            template: path.resolve(__dirname, 'src/html/index.html'),
            filename: path.resolve(__dirname, 'dist/app/index.html'),
            apiURL: `${serverHostname}/js/api.min.js`
        })
    ],
    ...localConfig
};
