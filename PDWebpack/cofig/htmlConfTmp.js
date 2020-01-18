/** Html 基础配置
 *
 * 作为 HtmlWebpackPlugin 导入页面时使用的配置基础对象
 * 在后续处理中会基于该配置对象克隆并追加或修改配置项
 *
 * @author fybug
 * @version 0.0.1
 * @since PDWebpack 0.0.1
 */
global.htmlConfTmp = {
    meta: {
        "viewport": "width=device-width, initial-scale=1, shrink-to-fit=n",
        "x-ua-compatible": "ie=edge"
    },
    /** 代码压缩配置 */
    minify: {
        caseSensitive: true,
        collapseBooleanAttributes: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true, removeRedundantAttributes: true,
        processConditionalComments: true, trimCustomFragments: true,
        collapseWhitespace: true
    }, cache: false
};