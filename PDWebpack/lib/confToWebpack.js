/** 框架配置转 webpack 配置工具
 *
 * 快捷读取 webpack 配置项对应的框架配置
 *
 * @author fybug
 * @version 0.0.1
 * @since PDWebpack 0.0.1
 */
global.ConfToWebpack = class ConfToWebpack {
    /** 框架配置对象
     * @type {CONF}
     */
    CONF;

    /** 初始化时需加入当前使用的框架配置对象
     * @param {CONF} conf 当前框架配置
     */
    constructor(conf) {
        this.CONF = conf;
    }

    /** 获取对应的输出命名
     *
     * 获取 [name]Out.outName 配置项
     *
     * @param {string} name 获取的类型
     * @param {string} defa 默认值
     * @return {string} 当前使用的配置项
     */
    GetOutName(name, defa) {
        return this.CONF[name + 'Out'].outName || defa
    }

    /** 获取全局替换 url
     *
     * @param {string} defa 默认配置项
     * @return {string} 配置数据
     */
    GlobalUrlOf(defa = '') {
        let out = this.CONF.Out.urlOf;
        return out !== undefined ? out : defa;
    }

    /** 获取对应配置的替换 url
     *
     * @param {string} name 获取的类型
     * @param {string} defa 默认值
     * @return {string} 当前使用的配置项
     */
    GetUrlOf(name, defa = './') {
        let out = this.CONF[name + 'Out'].urlOf;
        if (out !== undefined) return out;

        out = this.CONF.Out.urlOf;
        return (out !== undefined) ? out : defa;
    };
};