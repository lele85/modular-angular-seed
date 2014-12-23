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
			files: {
				"<%= devDir %>/main.test.js" : "<%= devDir %>/main.js",
				"<%= devDir %>/systemjs.config.test.js" : "<%= devDir %>/systemjs.config.js",
				"<%= devDir %>/systemjs.main.test.js" : "<%= devDir %>/systemjs.main.js"
			},
			options: {
				context: {
					CUSTOMER_REQUIRE: customersModulesConfig.getGustomerModules(customer).appModules.paths,
					CUSTOMER_REQUIRE_TEST: customersModulesConfig.getGustomerModules(customer).testModules.paths,
					CUSTOMER_MODULES: customersModulesConfig.getGustomerModules(customer).appModules.name_vars,
					CUSTOMER_MODULES_TEST: customersModulesConfig.getGustomerModules(customer).testModules.name_vars,
					CUSTOMER_IMPORT: customersModulesConfig.getGustomerModules(customer).appModules.imports,
					CUSTOMER_IMPORT_TEST: customersModulesConfig.getGustomerModules(customer).testModules.imports,
					TEST: true
				}
			}
		}
	}
};
