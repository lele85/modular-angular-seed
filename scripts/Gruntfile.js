module.exports = function(grunt) {
	var _ = require("lodash");
	var minified = grunt.option("minified") ? true : false;
	var minificationTasks = minified ? ["build"] : ["preprocess:build", "preprocess:style", "sass"];

	var config = {
		pkg: grunt.file.readJSON("package.json"),
		devDir: "../app",
		buildDir: "../bin"
	};

	grunt.option("projectName", config.pkg.name);

	config = _.merge(config, require("./Grunt.config.install.js"));
	config = _.merge(config, require("./Grunt.config.serve.js"));
	config = _.merge(config, require("./Grunt.config.style.js"));
	config = _.merge(config, require("./Grunt.config.build.js"));
	config = _.merge(config, require("./Grunt.config.test.js"));
	config = _.merge(config, require("./Grunt.config.test_seed.js"));

	grunt.initConfig(config);

	grunt.loadNpmTasks("grunt-shell");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-requirejs");
	grunt.loadNpmTasks("grunt-usemin");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-angular-templates");
	grunt.loadNpmTasks("grunt-preprocess");
	grunt.loadNpmTasks("grunt-karma");
	grunt.loadNpmTasks("grunt-protractor-runner");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-bower-task");

	grunt.registerTask("install", "Aligns dev and bower dependencies. You should run this task after any git pull.", ["shell:npm_install", "clean:vendor", "bower:install", "clean:lib"]);
	grunt.registerTask("serve", "Serve client application and any mock service defined in /scripts/server/app.js. Invoked with --minified builds and serve the minified version of the frontend.", minificationTasks.concat(["connect:server"]));
	grunt.registerTask("build", "Perform a custom build of the app. With --customer you can chose wich composition of modules you want to bundle. Customer definitions are located in /scripts/Grunt.config.build.customers.js. If no customer is passed all modules are bundled together.", [
		"clean:vendor",
		"bower:install",
		"clean:lib",
		"preprocess:style",
		"preprocess:build",
		"sass",
		"clean:build",
		"copy:index",
		"copy:asset",
		"copy:fonts",
		"useminPrepare",
		"usemin",
		"concat",
		"cssmin",
		"ngtemplates",
		"requirejs",
		"clean:afterBuild"
	]);
	grunt.registerTask("test_unit", "Runs unit tests with karma. If you want to keep karma watching for file modification you can use the option --watch", ["preprocess:test", "karma:unit"]);
	grunt.registerTask("test_e2e", "Runs e2e protractor specs. In order to perform e2e test you should serve a version of the app with grunt server and selenium server.", ["protractor:phantomjs"]);
	grunt.registerTask("selenium", "Starts selenium server", ["shell:webdriver_start"]);
	grunt.registerTask("selenium_update", "Download and updates selenium web runner tasks", ["shell:webdriver_update"]);
	grunt.registerTask("test_seed", "", ["shell:testSeed"]);

};
