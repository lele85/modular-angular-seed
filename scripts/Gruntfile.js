module.exports = function(grunt) {
	var _ = require('lodash');
	
	var config = {
		pkg: grunt.file.readJSON('package.json'),
		devDir: "../app",
		buildDir: "../bin"
	};

	config = _.merge(config, require("./Grunt.config.install.js"));
	config = _.merge(config, require("./Grunt.config.serve.js"));
	config = _.merge(config, require("./Grunt.config.style.js"));

	grunt.initConfig(config);

	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('install', ['shell:npm_install','shell:bower_install']);
	grunt.registerTask('serve', ['shell:serve']);
};