const path = require('path');
const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devConfig = require('./webpack.dev.config.js');
const prodConfig = require('./webpack.prod.config.js');

const polyfills = [
    '@babel/polyfill',
    'url-polyfill',
    'element-closest-polyfill'
];

module.exports = (env = {}) => merge({
    entry: {
      main:  [...polyfills, './index.js'],
      cache:  [...polyfills, './cache.js']
},
    context: __dirname + '/src/js/',
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'src/js'),
            utils: path.resolve(__dirname, 'src/js/utils'),
            themes: path.resolve(__dirname, 'src/themes'),
            css: path.resolve(__dirname, 'src/css'),
            img: path.resolve(__dirname, 'src/img')
        }
    },
    output: {
        path: __dirname + '/dist/app/',
        filename: (pathData) => {
            return pathData.chunk.name === 'main' ? '[name].bundle.js' : '[name].bundle.[hash].js';
        }
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    babelrc: true,
                    envName: env.production ? 'production' : 'development'
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        context: path.resolve(__dirname, 'src'),
                        name: '[path][name].[ext]'
                    }
                }]
            }
        ]
    },
    stats: {
        children: false,
        entrypoints: false
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'main.bundle.css', ignoreOrder: true }),
        new OptimizeCssAssetsPlugin()
    ]
}, env.production ? prodConfig : devConfig);

