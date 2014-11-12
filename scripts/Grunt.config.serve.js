var grunt = require('grunt');
var minified = grunt.option('minified') || "no";
var env = minified === "yes" ? "PROD" : "DEV";

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