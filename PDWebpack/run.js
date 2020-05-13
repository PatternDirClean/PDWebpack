confload.runOf('ModeLoad', /** @param {ModeLoad} modeload */(modeload) => {
    modeload.publicMode('app', JsPath + 'app.js', "defer");
    modeload.addMode('index', JsPath + 'index.js', "defer");
    modeload.addMode('main', JsPath + 'main.js', "defer");
    return 'PageLoad';
}).then((pageLoad) => {
    pageLoad.addPage('index', SourcePath + 'index.html', ['index']);
    pageLoad.addPage('main', SourcePath + 'main.html', ['main']);
});