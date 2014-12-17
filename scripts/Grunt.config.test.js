var grunt = require("grunt");
var watch = grunt.option("watch") ? true : false;
var customersModulesConfig = require("./Grunt.config.build.customers.js");
var customer = grunt.option("customer");

module.exports = {
	shell: {
		options: {
			stdout: true
		},
		"webdriver_update": {
			command: "node node_modules/protractor/bin/webdriver-manager update"
		},
		"webdriver_start": {
			command: "node node_modules/protractor/bin/webdriver-manager start"
		}
	},
	karma: {
		unit: {
			configFile: "./karma.config.js",
			autoWatch: watch,
			singleRun: !watch
		}
	},
	protractor: {
		options: {
			keepAlive: false, // If false, the grunt process stops when the test fails.
			noColor: false, // If true, protractor will not use colors in its output.
			configFile: "./protractor.config.js"
		},
		phantomjs: {
			options: {
				args: {
					browser: "phantomjs"
				}
			}
		}
	},
	preprocess: {
		test: {
			options: {
				context: {
					CUSTOMER_REQUIRE: customersModulesConfig.getGustomerModules(customer).appModules.paths,
					CUSTOMER_MODULES: customersModulesConfig.getGustomerModules(customer).appModules.names,
					CUSTOMER_REQUIRE_TEST: customersModulesConfig.getGustomerModules(customer).testModules.paths,
					CUSTOMER_MODULES_TEST: customersModulesConfig.getGustomerModules(customer).testModules.names,
					TEST: true
				}
			},
			src: "<%= devDir %>/main.js",
			dest: "<%= devDir %>/main.test.js"
		}
	}
};
