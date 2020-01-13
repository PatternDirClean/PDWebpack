global.WebpackConf = () => {
    let confget = new ConfToWebpack(Conf);

    return {
        /** 输出配置 */
        output: {
            /** 输出的文件名 */
            filename: confget.GetOutName('js', "[hash:12][name][id].js"),
            /** 输出路径 */
            path: OutPath,
            /** url 替换 */
            publicPath: confget.GlobalUrlOf()
        },
        /** 脱离的第三方库 */
        externals: require('./externals')(confget, Conf),
        resolve: require('./resolve')(confget, Conf),
        module: {
            /** 文件加载规则 */
            rules: require('./rules')(confget, Conf)
        },
        /** 插件 */
        plugins: require('./plugins')(confget, Conf),
        performance: {hints: false}
    }
};