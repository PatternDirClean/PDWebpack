# PDWebpack
![](https://img.shields.io/badge/version-0.0.1-00b58a.svg "当前版本")
![](https://img.shields.io/badge/webpack-4.41.5+-2e93ff.svg "开发所使用等等 webpack 版本")
![](https://img.shields.io/badge/license-Apache%202.0-f27122.svg "使用的开源协议")

基于 **webpack** 开发的框架，核心目的是为了增加 **webpack** 配置的可读性，方便后续的手脚架开发

每一种类型的配置都会单独存放

## 目录结构：
<pre>
┃
┣ build // 打包后文件的存放文件夹
┃
┣ PDWebpack // 框架运行目录
┃ ┃
┃ ┣ config // 框架配置相关
┃ ┃ ┃
┃ ┃ ┗ webpack // webpack 配置相关
┃ ┃
┃ ┣ lib    // 框架运行相关的依赖
┃ ┣ load   // 框架加载相关
┃ ┗ run.js // 用户代码，在此处使用框架
┃
┣ test // 示例项目
┃
┣ package.json
┣ package-lock.json
┣ postcss.config.js   // postcss 配置文件
┣ webpack.conf.js     // webpack 公共配置
┣ webpack.dev.js      // webpack 开发用配置
┗ webpack.prod.js     // webpack 生产配置
</pre>

可通过 **WIKI** 学习原理和使用

## 使用方法
下载或 clone 本项目，直接解压作为项目文件夹然后按照下列提示即可

**建议克隆 releases 分支，或者去发行版下载<br/>
配置完成后可以使用 package.json 中声明的 debug / bulic 命令运行 webpack**

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

## 额外
###安装 **postcss**
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

## 分支说明
**dev**：当前的开发分支，不建议 clone 本分支

**master**：当前主分支，稳定版的源码

## 提供bug反馈或建议
- [码云Gitee](https://gitee.com/PatternDirClean/PDWebpack)
- [Github](https://github.com/PatternDirClean/PDWebpack)