var _ = require('lodash');

var modules_paths = {
	"CommonModule": "modules/common/module",
	"FirstModule": "modules/first/module",
	"SecondModule": "modules/second/module"
};

var config = {
	"all": ["CommonModule", "FirstModule", "SecondModule"],
	"customer_1": ["CommonModule", "FirstModule"],
	"customer_2": ["CommonModule", "SecondModule"]
};

module.exports = {
	getGustomerModules: function(customer) {
		customer = customer || "all";
		var app_modules = config[customer].map(function(app_module) {
			return {
				path: '"' + modules_paths[app_module] + '"',
				name: app_module
			};
		});
		var app_tests = config[customer].map(function(app_module) {
			return {
				path: '"' + modules_paths[app_module] + '_test"',
				name: app_module + "Test"
			};
		});
		return {
			app_modules : {
				paths: _.pluck(app_modules, "path").join(',\n'),
				names: _.pluck(app_modules, "name").join(',\n'),
			},
			test_modules : {
				paths: _.pluck(app_tests, "path").join(',\n'),
				names: _.pluck(app_tests, "name").join(',\n'),
			}
		};
	}
};