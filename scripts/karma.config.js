module.exports = function(conf) {
    conf.set({
        basePath: "../app",
        frameworks: ['jasmine', 'requirejs'],
        reporters: ['dots'],
        browsers: ['PhantomJS'],
        //browsers: ['Chrome', 'Firefox', 'Safari', 'Opera','PhantomJS'],

        // these are default values anyway
        singleRun: true,
        colors: true,

        files: [
            'main.test.js', {
                pattern: '**/*.*',
                included: false
            }
        ],
        logLevel: conf.LOG_INFO,

    });
};