exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	seleniumArgs: ['-browserTimeout=60'],
	baseUrl: 'http://localhost:8000/',
	specs: [
		'../app/modules/**/test/e2e/*Spec.js',
	],
	capabilities: {
		'browserName': 'phantomjs',

		/* 
		 * Can be used to specify the phantomjs binary path.
		 * This can generally be ommitted if you installed phantomjs globally.
		 */
		'phantomjs.binary.path': './node_modules/.bin/phantomjs',

		/*
		 * Command line arugments to pass to phantomjs.
		 * Can be ommitted if no arguments need to be passed.
		 * Acceptable cli arugments: https://github.com/ariya/phantomjs/wiki/API-Reference#wiki-command-line-options
		 */
		'phantomjs.cli.args': ['--debug=false', '--webdriver-logfile=/tmp/webdriver.log', '--webdriver-loglevel=INFO']
	}
}