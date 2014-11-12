var grunt = require('grunt');
var watch = grunt.option('watch') ? true : false;
var customersModulesConfig = require("./Grunt.config.build.customers.js");
var customer = grunt.option('customer');

module.exports = {
	shell: {
		options: {
			stdout: true
		},
		webdriver_update: {
			command: 'node node_modules/protractor/bin/webdriver-manager update'
		},
		webdriver_start: {
			command: 'node node_modules/protractor/bin/webdriver-manager start'
		}
	},
	karma: {
		unit: {
			configFile: './karma.config.js',
			autoWatch: watch,
			singleRun: !watch
		}
	},
	preprocess: {
		test: {
			options: {
				context: {
					CUSTOMER_REQUIRE: customersModulesConfig.getGustomerModules(customer).app_modules.paths,
					CUSTOMER_MODULES: customersModulesConfig.getGustomerModules(customer).app_modules.names,
					CUSTOMER_REQUIRE_TEST: customersModulesConfig.getGustomerModules(customer).test_modules.paths,
					CUSTOMER_MODULES_TEST: customersModulesConfig.getGustomerModules(customer).test_modules.names,
					TEST : true
				}
			},
			src: '<%= devDir %>/main.js',
			dest: '<%= devDir %>/main.test.js'
		}
	}
}