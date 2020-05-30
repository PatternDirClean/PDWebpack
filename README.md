# PDWebpack
![](https://img.shields.io/badge/version-0.0.1-00b58a.svg "当前版本")
![](https://img.shields.io/badge/webpack-4.41.5+-2e93ff.svg "开发所使用等等 webpack 版本")
![](https://img.shields.io/badge/license-Apache%202.0-f27122.svg "使用的开源协议")

基于 **webpack** 开发的框架，核心目的是为了增加 **webpack** 配置的可读性，方便后续的手脚架开发

## 拆解配置文件

将原本写在 webpack.config.js 中的配置按配置项拆解成单个文件。提倡使用 ide 的文件搜索功能查找对应的配置项。

## 简易加载

在 `run.js` 中使用框架的加载对象 `confload` 载入并配置模块和页面，并将其联系起来

```javascript
confload.runOf('ModeLoad', /** @param {ModeLoad} modeload */(modeload) => {
    // 加载为公共模块
    modeload.publicMode('app', JsPath + 'app.js', "defer");
    // 加载为私有模块，设置加载方式为 defer 延迟加载
    modeload.addMode('index', JsPath + 'index.js', "defer");
    modeload.addMode('main', JsPath + 'main.js', "defer");
    return 'PageLoad';
}).then((pageLoad) => {
    // 加载 index.html 页面，载入 index 私有模块
    pageLoad.addPage('index', SourcePath + 'index.html', ['index']);
    pageLoad.addPage('main', SourcePath + 'main.html', ['main']);
});
```

## 单独配置

在 `conf.js` 中配置使用的加载模块以及文件编译输出的配置。每个文件对应的输出方式已被单独分离到该文件中。

并在该文件中指定 devtool 专用配置。

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
┃ ┃
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
### 安装 **postcss**
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