module.exports = function(grunt) {
	var _ = require('lodash');
	
	var config = {};
	config = _.merge(config, require("./Grunt.config.install.js"));
	config = _.merge(config, require("./Grunt.config.serve.js"));

	grunt.initConfig(config);

	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('install', ['shell:npm_install','shell:bower_install']);
	grunt.registerTask('serve', ['shell:serve']);
};