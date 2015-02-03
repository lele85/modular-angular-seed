var grunt = require('grunt');
var minified = grunt.option('minified') ? true : false;
var env = minified ? "PROD" : "DEV";

module.exports = {
	shell: {
		options: {
			stdout: true
		},
		serve: {
			stdin: true,
			command: 'node server/app.js '+ env
		}
	}
};