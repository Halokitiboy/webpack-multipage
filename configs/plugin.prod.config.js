const pageArr=require('./pageArr.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const pluginCinfigs = [
    new UglifyJSPlugin()
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