const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const filedire = path.join(process.cwd(), 'src/js');
const explorer = require('./configs/fileRead');
const pageArr = require('./configs/pageArr.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var entry = require('./configs/entry.config.js');
var glob = require('glob')
//entries函数
var entries= function () {
    var jsDir = path.resolve('./src/', 'js')
    var entryFiles = glob.sync(jsDir + '/*.{js,jsx}')
    var map = {};

    for (var i = 0; i < entryFiles.length; i++) {
        var filePath = entryFiles[i];
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
        map[filename] = filePath;
    }
    return map;
}
console.log(entries());
module.exports = {
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist'),
        // publicPath:'',
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js'
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        compress: true,
        port: 9000,
        proxy: {},
        overlay: { 
            warnings: false,
            errors: true 
        },
        quiet: false, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            aggregateTimeout: 300,
            ignored: /node_modules/
        },
        noInfo: false
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
                loader: ExtractTextPlugin.extract(['style-loader', 'css-loader', 'postcss-loader'])
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'less-loader'])
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '../images/[hash].[ext]'
                    }
                }]
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50000,
                        name: '../[path]/[hash].[ext]'
                    }
                }]
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            }
        ]
    },
    plugins: require('./configs/plugin.dev.config.js'),
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
      }
}