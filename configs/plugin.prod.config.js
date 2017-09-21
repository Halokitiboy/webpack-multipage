const pageArr=require('./pageArr.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const pluginCinfigs = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
        filename: "vendors.js",
        chunks: pageArr,
        minChunks: pageArr.length,
    })
]
pageArr.forEach((page) => {
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `./${page}.html`,
        template: `./src/${page}.html`,
        hash: true, // 为静态资源生成hash值
        chunks: ['vendors', `${page}`],
        favicon: './src/images/favicon.ico'
    });
    pluginCinfigs.push(htmlPlugin);
});
module.exports = pluginCinfigs