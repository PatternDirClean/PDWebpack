global.PageLoad = class PageLoad {
    /** 加载的默认配置 */
    defaultOptions = {
        /** 输出的文件后缀 */
        outsuffix: ".html",
        /** 网页图标 */
        favicon: IconPath,
        /** js 标签插入位置 */
        inject: 'head',
        /** 是否导入全局配置 */
        pubchuncks: true
    };
    /** 配置队列 */
    htmlQuery = [];

    /** 获取配置模版
     * @param {boolean} minify 是否开启压缩
     * @return 配置模版
     */
    __getTmp(minify = true) {
        let tmp = Object.assign({}, htmlConfTmp);
        // 去除压缩
        minify || delete tmp.minify;

        return tmp;
    }

    /** 增加一个页面
     *
     * @param {string} pagePath 页面模版路径
     * @param {string} outName 输出的页面的名称
     * @param {array} chunk 该页面的私有模块
     * @param extent 拓展属性
     * @param {PageLoad.defaultOptions} options 拓展配置
     *
     * @return this
     */
    addPage(pagePath, outName, chunk = [], extent = {}, options = {}) {
        // 初始化配置
        options = Object.assign({}, this.defaultOptions, options);

        let tmp = this.__getTmp(); // 模版
        this.htmlQuery.push(tmp);

        /* 填充配置 */
        {
            tmp.favicon = options.favicon;
            tmp.inject = options.inject;
            tmp.__pubchuncks = options.pubchuncks;
            // 输入路径
            tmp.template = pagePath;
            // 输出路径
            tmp.filename = PageOutPath + outName + options.outsuffix;
            tmp.chunks = chunk;

            // 填充拓展配置
            for (let k in extent) tmp[k] = extent[k];
        }
        return this;
    }

    /** 加载到配置处理对象中
     * @param config 配置处理对象
     * @return 配置处理对象
     */
    __loadToConfig(config) {
        config.PageLoad = this;
        return config;
    }

    /** 转化到配置中
     * @param config 配置对象
     * @return 配置对象
     */
    __toConfig(config) {
        let conf = config.main;
        let modleload = config.ModeLoad;

        let HtmlWebpackPluginQuery = [];

        this.htmlQuery.forEach((v) => {
            // 填充公共模块
            v.__pubchuncks &&
            (v.chunks = [...modleload.publicentry, ...v.chunks]);
            delete v.__pubchuncks;

            HtmlWebpackPluginQuery.push(new HtmlWebpackPlugin(v));
        });

        conf.plugins.push(...HtmlWebpackPluginQuery);

        config.main = conf;
        return config;
    }
};