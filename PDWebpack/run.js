confload.runOf('ModeLoad', /** @param {global#ModeLoad} modeload */(modeload) => {
    modeload.publicMode('app', JsPath + 'app.js', "defer");
    modeload.addMode('index', JsPath + 'index.js', "defer");
    modeload.addMode('main', JsPath + 'main.js', "defer");
    return 'PageLoad';
}).then((pageLoad) => {
    pageLoad.addPage(SourcePath + 'index.html', 'index', ['index']);
    pageLoad.addPage(SourcePath + 'main.html', 'main', ['main']);
});