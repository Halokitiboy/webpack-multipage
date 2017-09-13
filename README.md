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