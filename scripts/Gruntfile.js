module.exports = function(grunt) {
	var _ = require('lodash');
	var minified = grunt.option('minified') ? true : false;
	var minification_tasks = minified ? ["build"] : ["preprocess:build"];

	var config = {
		pkg: grunt.file.readJSON('package.json'),
		devDir: "../app",
		buildDir: "../bin"
	};

	grunt.option('projectName', config.pkg.name);

	config = _.merge(config, require("./Grunt.config.install.js"));
	config = _.merge(config, require("./Grunt.config.serve.js"));
	config = _.merge(config, require("./Grunt.config.style.js"));
	config = _.merge(config, require("./Grunt.config.build.js"));
	config = _.merge(config, require("./Grunt.config.test.js"));

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
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-bower-task');
	

	grunt.registerTask('install', ['shell:npm_install','clean:vendor','bower:install']);
	grunt.registerTask('serve', minification_tasks.concat(['connect:server']));
	grunt.registerTask('build', [
		'clean:vendor',
		'bower:install',
		'preprocess:build',
		'sass',
		'clean:build',
		'copy:index',
		'copy:asset',
		'copy:fonts',
		'useminPrepare',
		'usemin',
		'concat',
		'cssmin',
		'ngtemplates',
		'requirejs',
		'clean:afterBuild'
	]);
	grunt.registerTask('test_unit', ["preprocess:test","karma:unit"]);
	grunt.registerTask('test_e2e', ["protractor:phantomjs"]);
	grunt.registerTask('selenium', ["shell:webdriver_start"]);
  	grunt.registerTask('selenium_update', ["shell:webdriver_update"]);

};