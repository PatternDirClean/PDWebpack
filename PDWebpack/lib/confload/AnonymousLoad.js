global.AnonymousLoad = class AnonymousLoad {
    /** 模块加载模式 */
    loadMode = {};
    /** 模块路径映射 */
    entry = {};
    /** 当前名称 */
    nowName = 0;
    /** 公共模块 */
    publicentry = [];
    /** 固定导入的模块 */
    providePlugin = {};

    __AssignedName() {
        return '' + this.nowName++;
    }

    __plushMode(name, path, mode) {
        this.entry[name] = path;
        this.loadMode[name] = mode;
    }

    /** 添加模块
     *
     * @param {string} paths 模块路径
     * @param {'sync'|'defer'|'async'} mode 加载模式 {@see #setModeLoads}
     *
     * @return this
     */
    addMode(paths = '', mode = 'sync') {
        this.__plushMode(this.__AssignedName(), paths, mode);
        return this;
    };

    /** 加入公共模块
     *
     * @param {string} paths 模块路径
     * @param {'sync'|'defer'|'async'} mode 加载模式 {@see #setModeLoads}
     *
     * @return this
     */
    publicMode(paths = '', mode = 'sync') {
        let name = this.__AssignedName();

        this.publicentry.push(name);
        this.__plushMode(name, paths, mode);

        return this;
    };

    /** 导入固定模块
     * @param {string} modename 导入后的全局变量名称
     * @param {string} paths 模块路径
     *
     * @return this
     */
    fixedMode(modename, paths) {
        this.providePlugin[modename] = paths;
        return this;
    };

    /** 加载到配置处理对象中
     * @param config 配置处理对象
     * @return 配置处理对象
     */
    __loadToConfig(config) {
        config.ModeLoad = this;
        config.AnonymousLoad = this;
        return config;
    };

    /** 转化到配置中
     * @param config 配置处理对象
     * @return 配置处理对象
     */
    __toConfig(config) {
        let conf = config.main;
        // 加载模块入口
        conf.entry = this.entry;

        /* 加载模块加载模式配置 */
        let modeload = WebPackPlugins.ScriptExtHtmlWebpackPlugin();
        for (let n in this.loadMode)
            modeload[this.loadMode[n]].push(n);

        // 模块加载方式
        conf.plugins.push(new ScriptExtHtmlWebpackPlugin(modeload, HtmlWebpackPlugin));

        // 固定导入的模块
        conf.plugins.push(new webpack.ProvidePlugin(this.providePlugin));

        config.main = conf;
        return config;
    }
};