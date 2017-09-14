const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const filedire = path.join(process.cwd(), 'src/js');
const explorer = require('./configs/fileRead');
const pageArr = require('./configs/pageArr.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var entry = require('./configs/entry.config.js');
//依项目情况使用 jq 还是 zepto
module.exports = {
    entry: entry,
    output: {
        path: path.join(__dirname, 'build'),
        // publicPath:'',
        filename: 'js/[name].js'
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, "./build"),
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader?cacheDirectory',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['style-loader', 'css-loader','postcss-loader'])
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(['css-loader','postcss-loader', 'less-loader'])
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name:'../images/[hash].[ext]'
                    }
                }]
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins: require('./configs/plugin.dev.config.js')
}