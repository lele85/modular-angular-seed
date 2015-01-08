var customersModulesConfig = require("./Grunt.config.build.customers.js");
var grunt = require("grunt");
var customer = grunt.option("customer");
module.exports = {
	clean: {
		afterBuild: ["<%= buildDir %>/templates.js", "<%= buildDir %>/all.js", "<%= buildDir %>/tmp","<%= buildDir %>/vendor", "<%= buildDir %>/systemjs.config.prod.js", "<%= buildDir %>/systemjs.config.run.js"],
		build: ["<%= buildDir %>"],
		options: {
			force: true
		},
		vendor: ["<%= devDir %>/vendor/**"],
		lib: ["lib"]
	},
	copy: {
		index: {
			files: [{
				src: "<%= devDir %>/index.html",
				dest: "<%= buildDir %>/index.html"
			}]
		},
		css: {
			files: [{
				src: "<%= devDir %>/css/app.css",
				dest: "<%= buildDir %>/css/app.css"
			}]
		},
		vendor : {
			files: [{
				src: ["**"],
				cwd: "<%= devDir %>/vendor",
				dest: "<%= buildDir %>/vendor",
				expand: true
			}]
		},
		systemjs : {
			files: [{
				src: "<%= devDir %>/systemjs.config.prod.js",
				dest: "<%= buildDir %>/systemjs.config.prod.js"
			},{
				src: "<%= devDir %>/systemjs.run.prod.js",
				dest: "<%= buildDir %>/systemjs.run.prod.js"
			}]
		},
		asset: {
			files: [{
				src: ["**/*.png", "!vendor/**"],
				cwd: "<%= devDir %>",
				dest: "<%= buildDir %>/",
				expand: true
			}]
		},
		fonts: {
			files: [{
				expand: true,
				cwd: "<%= devDir %>/vendor/bootstrap/fonts/",
				src: "*",
				dest: "<%= buildDir %>/fonts"
			}, {
				expand: true,
				cwd: "<%= devDir %>/",
				src: "modules/*/fonts/*",
				dest: "<%= buildDir %>"
			}]
		}
	},
	useminPrepare: {
		html: "<%= buildDir %>/index.html",
		options: {
			dest: "<%= buildDir %>",
			staging: "<%= buildDir %>/tmp",
			flow: {
				html: {
					steps: {
						"js": ["concat","uglifyjs"],
						"css": ["concat", "cssmin"]
					},
					post: []
				}
			}
		}
	},

	usemin: {
		html: "<%= buildDir %>/index.html"
	},

	ngtemplates: {
		retirementPlannning: {
			cwd: "<%= devDir %>",
			src: "**/*.tpl.html",
			dest: "<%= buildDir %>/templates.js",
			options: {
				bootstrap: function(module, script) {
					return "var initTemplates = function(){ angular.module(\"" + grunt.option("projectName") + "\").run([\"$templateCache\", function($templateCache) {" + script + " }]);};";
				},
				htmlmin: {
					collapseBooleanAttributes: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true,
					removeComments: true,
					removeEmptyAttributes: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true
				}
			}
		}
	},
	preprocess: {
		options: {
			context: {
				TEST: false
			}
		},
		build: {
			files: {
				"<%= buildDir %>/index.html": "<%= devDir %>/index.html",
				"<%= devDir %>/systemjs.config.prod.js": "<%= devDir %>/systemjs.config.js",
				"<%= devDir %>/systemjs.main.prod.js": "<%= devDir %>/systemjs.main.js",
				"<%= devDir %>/systemjs.run.prod.js" : "<%= devDir %>/systemjs.run.js"
			},
			options: {
				context: {
					CUSTOMER_REQUIRE: customersModulesConfig.getGustomerModules(customer).appModules.paths,
					CUSTOMER_REQUIRE_TEST: "",
					CUSTOMER_MODULES: customersModulesConfig.getGustomerModules(customer).appModules.name_vars,
					CUSTOMER_MODULES_TEST: "",
					CUSTOMER_IMPORT: customersModulesConfig.getGustomerModules(customer).appModules.imports,
					CUSTOMER_IMPORT_TEST: ""
				}
			}
		}
	}
};