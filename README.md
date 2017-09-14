#### 

>安装所有依赖

```
npm install
```
>或者

```
yarn 
```
### 1.babel 在每个文件都插入了辅助代码，使代码体积过大
> 禁用了 babel 自动对每个文件的 runtime 注入，而是引入 babel-plugin-transform-runtime 并且使所有辅助代码从这里引用.

> 执行 

```
         npm install babel-plugin-transform-runtime --save-dev
```

 > 来把它包含到你的项目中，也要使用 

```
        npm install babel-runtime --save
```
  > 把 babel-runtime 安装为一个依赖。

### 2.url-loader 路径不正确，可通过 publicPath进行配置

```
output: {
        //context: path.resolve(__dirname, 'scripts'),
		path: path.resolve(HTML_DIST_PATH, "assets"),
        publicPath: '/dist/assets/',//当生成的资源文件和站点不在同一地方时需要配置改地址 e.g.：站点在src,资源生成到/src/static/dist，那么publicPath="/static/dist"
        filename: "[name].[hash:6].js",
        chunkFilename: "[id].chunk.js",
    }
```
