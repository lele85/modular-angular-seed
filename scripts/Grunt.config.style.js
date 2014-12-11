var customersModulesConfig = require("./Grunt.config.build.customers.js");
var grunt = require("grunt");
var customer = grunt.option("customer");

module.exports = {
	sass: {
		dist: {
			options: {
				compass: true
			},
			files: {
				"<%= devDir %>/css/app.css": "<%= devDir %>/scss/app.prod.scss"
			}
		}
	},
	preprocess: {
		options: {
			context: {
				TEST: false
			}
		},
		style: {
			src: "<%= devDir %>/scss/app.scss",
			dest: "<%= devDir %>/scss/app.prod.scss",
			options: {
				context: {
					CUSTOMER_STYLES: customersModulesConfig.getGustomerModules(customer).appModules.styles
				}
			}
		}
	}
};
