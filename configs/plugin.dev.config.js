const pageArr = require('./pageArr.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const pluginCinfigs = [
    new webpack.HotModuleReplacementPlugin(), //热更新必须
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
        filename: "vendors.js",
        minChunks: Infinity,
    }),
    // new webpack.ProvidePlugin({ //加载jq
    //     $: "jquery",
    //     jQuery: "jquery",
    //     "window.jQuery": "jquery",
    //     // _: "lodash"
    // }),
    new ExtractTextPlugin("css/main.css")
]
pageArr.forEach((page) => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `./${page}.html`,
        template: `./src/${page}.html`,
        hash: true, // 为静态资源生成hash值
        chunks: ['vendors', `${page}`]
    });
    pluginCinfigs.push(htmlPlugin);
});
module.exports = pluginCinfigs