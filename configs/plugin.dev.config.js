const Arr= require ('./pageArr.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const vConsolePlugin = require('vconsole-webpack-plugin'); 
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const env = require('./dev.env');
const pluginCinfigs = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
        filename: "vendors.js",
        chunks: Arr.jsArr,
        minChunks: Arr.jsArr.length,
    }),
    new ExtractTextPlugin("css/main.css"),
    new webpack.HotModuleReplacementPlugin(), //热更新必须
    new webpack.DefinePlugin({
        'process.env': env
    }),
    new vConsolePlugin({
        enable: true // 发布代码前记得改回 false
    })
]
Arr['pageArr'].forEach((page) => {
   
    let jsChunkPath = page.replace(/pages\//,'');
    console.log(jsChunkPath)
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `./${page}.html`,
        template: `./src/${page}.html`,
        hash: true, // 为静态资源生成hash值
        chunks: ['vendors', `${jsChunkPath}`],
        favicon: './src/images/favicon.ico',
    });
    pluginCinfigs.push(htmlPlugin);
});
module.exports = pluginCinfigs