const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('css/main.css');
const extractLESS = new ExtractTextPlugin('css/main.css');
var pluginCinfigs = require('./configs/plugin.prod.config.js');
pluginCinfigs.push(extractCSS);
pluginCinfigs.push(extractLESS);
var dir = path.resolve()
module.exports = {
    entry: require('./configs/entry.config.js'),
    output: {
        path: path.join(__dirname, 'build'),
        publicPath:'/',
        filename: 'js/[name].js'
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
                use: extractCSS.extract(['css-loader', 'postcss-loader'])
            },
            {
                test: /\.less$/i,
                use: extractLESS.extract(['css-loader', 'less-loader'])
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8192,
                        name:'images/[hash].[ext]'
                    }
                }]
            }
            ,
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }
            // {
            //     test: /\.(html)$/,
            //     use: {
            //       loader: 'html-loader',
            //       options: {
            //         attrs: ['img:src',':data-src']
            //       }
            //     }
            //   }
        ]
    },
    plugins:pluginCinfigs
}