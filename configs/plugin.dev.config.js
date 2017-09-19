const pageArr = require('./pageArr.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
console.log(pageArr)
const pluginCinfigs = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
        filename: "vendors.js",
        chunks: pageArr,
        minChunks: pageArr.length,
    }),
    new ExtractTextPlugin("css/main.css"),
    new webpack.HotModuleReplacementPlugin(), //热更新必须
]
pageArr.forEach((page) => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `./${page}.html`,
        template: `./src/${page}.html`,
        hash: true, // 为静态资源生成hash值
        chunks: ['vendors', `${page}`],
        favicon: './src/images/favicon.ico',
    });
    pluginCinfigs.push(htmlPlugin);
});
module.exports = pluginCinfigs