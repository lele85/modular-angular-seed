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
	config = _.merge(config, require("./Grunt.config.build.js"));

	grunt.initConfig(config);

	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-preprocess');

	grunt.registerTask('install', ['shell:npm_install', 'shell:bower_install']);
	grunt.registerTask('serve', ['shell:serve']);
};