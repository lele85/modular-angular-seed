var _ = require("lodash");

var modulesDir = {
	"CommonModule": "modules/common",
	"FirstModule": "modules/first",
	"SecondModule": "modules/second"
};

var config = {
	"all": ["CommonModule", "FirstModule", "SecondModule"],
	"customer_1": ["CommonModule", "FirstModule"],
	"customer_2": ["CommonModule", "SecondModule"]
};

module.exports = {
	getGustomerModules: function(customer) {
		customer = customer || "all";
		var appModules = config[customer].map(function(appModule) {
			return {
				path: "\"" + modulesDir[appModule] + "/module\"",
				name: appModule,
				style: "@import \"../" + modulesDir[appModule] + "/style\";",
				import: "import {" + appModule + "} from \"" + modulesDir[appModule] + "/module\";",
				name_var: appModule + ".name"
			};
		});
		var testModules = config[customer].map(function(appModule) {
			return {
				path: "\"" + modulesDir[appModule] + "/module_test\"",
				name: appModule + "Test",
				style: "@import \"../" + modulesDir[appModule] + "/style\";",
				import: "import {" + appModule + "Test} from \"" + modulesDir[appModule] + "/module\";",
				name_var: appModule + "Test.name"
			};
		});
		return {
			appModules: {
				paths: _.pluck(appModules, "path").join(",\n"),
				names: _.pluck(appModules, "name").join(",\n"),
				styles: _.pluck(appModules, "style").join("\n"),
				imports: _.pluck(appModules, "import").join("\n"),
				name_vars: _.pluck(appModules, "name_var").join(",\n")
			},
			testModules: {
				paths: _.pluck(testModules, "path").join(",\n"),
				names: _.pluck(testModules, "name").join(",\n"),
				styles: _.pluck(testModules, "style").join("\n"),
				imports: _.pluck(testModules, "import").join("\n"),
				name_vars: _.pluck(testModules, "name_var").join(",\n")
			}
		};
	}
};
