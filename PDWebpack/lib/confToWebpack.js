global.ConfToWebpack = class ConfToWebpack {
    CONF;

    constructor(conf) {
        this.CONF = conf;
    }

    GetOutName(name, defa) {
        return this.CONF[name + 'Out'].outName || defa
    }

    GlobalUrlOf(defa = '') {
        let out = this.CONF.Out.urlOf;
        return out !== undefined ? out : defa;
    }

    GetUrlOf(name, defa = './') {
        let out = this.CONF[name + 'Out'].urlOf;
        if (out !== undefined) return out;

        out = this.CONF.Out.urlOf;
        return (out !== undefined) ? out : defa;
    };
};