const Arr= require ('./pageArr.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const vConsolePlugin = require('vconsole-webpack-plugin'); 
const env = require('./prod.env');
const enableConsole = env=== "production"? false: true;
const webpack = require('webpack');
const pluginCinfigs = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
        filename: "js/public/vendors.js",
        chunks: Arr.jsArr,
        minChunks: Arr.jsArr.length,
    }),
    new webpack.DefinePlugin({
        'process.env': env
    }),
    new CleanWebpackPlugin(['dist'],{
        root:     '/webpack-multipage',
        verbose:  true,
        dry:      false
      }),
    new vConsolePlugin({
        enable: enableConsole 
    })
]
Arr['pageArr'].forEach((page) => {
    let jsChunkPath = page.replace(/pages\//,'');
    const htmlPlugin = new HtmlWebpackPlugin({
        filename: `./${page}.html`,
        template: `./src/${page}.html`,
        hash: true, // 为静态资源生成hash值
        chunks: ['vendors', `${jsChunkPath}`],
        favicon: './src/images/favicon.ico'
    });
    pluginCinfigs.push(htmlPlugin);
});
module.exports = pluginCinfigs