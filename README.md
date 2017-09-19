#### 

>安装所有依赖

```
npm install
```
>或者

```
yarn 
```

>安装好依赖后运行

```
 npm run dev 或者 yarn dev 即可在 http://localhost:9000/index/index.html 查看
```


```
npm run build 或者 yarn build 即可打包生产环境的包了
```
>运行一下命令即可查看打包后的页面

```
npm run server 或者yarn server
```


----------



##以下是遇到的一些坑或者是刚开始自己不太清楚的地方的解决方法

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

		path: path.resolve(__dirname, "assets"),
        publicPath: '/dist/assets/',//当生成的资源文件和站点不在同一地方时需要配置改地址 e.g.：站点在src,资源生成到/src/static/dist，那么publicPath="/static/dist"
        filename: "[name].[hash:6].js",
        chunkFilename: "[id].chunk.js",
    }
```

### 3.打包生产环境是在构建命令加上 -p 即可压缩css

> 例如

```
 "build": "webpack --env=prod -p --progress"
```
### 