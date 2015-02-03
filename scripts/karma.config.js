var traceurOptions = require('./traceur.config');

module.exports = function(conf) {
    conf.set({
        basePath: "../app",
        frameworks: ["jasmine"],
        reporters: ["dots"],
        browsers: ["Chrome"],
        //browsers: ["Chrome", "Firefox", "Safari", "Opera","PhantomJS"],

        // these are default values anyway
        singleRun: true,
        colors: true,

        files: [
            { pattern: 'modules/**/*.js', included: false },
            { pattern: 'systemjs.main.test.js', included: false },
            { pattern: 'modules/**/*.html', included: false },
            { pattern: 'lib/*.js', included: false },
            'vendor/traceur-runtime/traceur-runtime.js',
            '../scripts/traceur-runtime-patch.js',
            'vendor/es6-module-loader/dist/es6-module-loader.src.js',
            'vendor/system.js/dist/system.src.js',
            { pattern: 'vendor/**/*.js', included: false },
            'systemjs.config.test.js',
            'systemjs.run.test.js'
        ],
        logLevel: conf.LOG_INFO,
        preprocessors: {
            'systemjs.main.test.js' : ['traceur'],
            'modules/**/*.js' : ['traceur']
        },
        traceurPreprocessor: {
            options: traceurOptions
        }
    });
};