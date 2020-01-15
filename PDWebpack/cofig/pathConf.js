/** 项目根目录 */
global.Root = path.resolve(__dirname, '../../') + '/';

/** 全局输出路径 */
global.OutPath = Root + 'build/';
/** 页面输出路径 */
global.PageOutPath = OutPath;

/** 源码根目录 */
global.SourcePath = Root + 'test/';
/** 全局静态资源路径 */
global.StaticPath = SourcePath + 'static/';
/** 网页图标路径 */
global.IconPath = StaticPath + 'img/favicon.png';

/** 公共 js 路径 */
global.JsPath = SourcePath + 'js/';
