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
			command: 'node_modules/.bin/nodemon server/app.js '+ env
		}
	}
};