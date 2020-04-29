/** 框架配置
 *
 * @version 0.0.1
 * @since PDWebpack 0.0.1
 */
global.Conf = {
    /** 加载模块加载顺序 */
    configload: ['ModeLoad', 'PageLoad'],

    // // 全局输出配置
    // Out: {
    //     // 编译资源后的替换的 url 地址
    //     urlOf: ''
    // },
    // // 模块输出配置
    // jsOut: {
    //     outName: '[hash:12][name][id].js'
    // },
    // // css 输出配置
    // cssOut: {
    //     urlOf: './',
    //     outName: '[hash:12][name][id].css'
    // },
    // // 字体文件输出配置
    // fontOut: {
    //     urlOf: './',
    //     outName: 'static/[name].[ext]'
    // },
    // // 图片输出配置
    // imgOut: {
    //     urlOf: './',
    //     outName: 'static/[id][name][hash:9].[ext]'
    // },

    /** 开发者模式下的专属配置 */
    devtool: {
        /** 测试状态模块输出名称 */
        jsOut: {outName: '[name].js'},
        /** 测试服务器端口 */
        port: 3000,
        /** 测试服务器访问地址 */
        host: "localhost",
        /** 测试过程存放路径 */
        contentBase: './build'
    }
};