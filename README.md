# PDWebpack
**v 0.0.1**

基于 **webpack** 开发的框架，核心目的是为了增加 **webpack** 配置的可读性，方便后续的手脚架开发

## 目录结构：
<pre>
┃
┣ build // 编译文件夹
┃
┣ PDWebpack // 框架目录
┃ ┃
┃ ┣ config // 配置相关
┃ ┃ ┃
┃ ┃ ┗ webpack // webpack 配置相关
┃ ┃
┃ ┣ lib    // 框架运行相关的文件
┃ ┣ load   // 加载相关
┃ ┗ run.js // 用户运行配置模块的部分
┃
┣ test // 示例
┃
┣ package.json
┣ package-lock.json
┣ postcss.config.js   // postcss 配置文件
┣ webpack.conf.js     // webpack 公共配置
┣ webpack.dev.js      // webpack 开发用配置
┗ webpack.prod.js     // webpack 生产配置
</pre>

## /PDWebpack/ 文件夹

框架所在文件夹，该文件夹下含有
- 配置相关的文件
- 加载相关的文件
- run.js 用户运行该框架的代码文件

> 更多请查看 wiki

# 使用
直接解压作为项目文件夹然后按照下列提示即可
> 配置完成后可以使用 package.json 中声明的 debug / bulic 命令运行 webpack

需要先安装 **Node.js** ，自行百度

在项目文件夹中运行 `npm -y init` 初始化

## 安装 **webpack**
```
npm install webpack webpack-cli webpack-dev-server -g
```

## 安装项目依赖
```
npm install --save-dev
```
## 安装 **postcss**
```
npm install postcss-cli -g
```
### 使用的 **postcss** 模块
```
autoprefixer
postcss-import
postcss-apply
postcss-nested
```
> 不使用可以无视 

# 参与
一个人的力量是有限的，一个项目终究需要大家一起完善

· fork 本仓库

· 新建 add_*** 分支 

· 提交等待合并