var customersModulesConfig = require("./Grunt.config.build.customers.js");
var grunt = require('grunt');
var customer = grunt.option('customer');
module.exports = {
	clean: {
		afterBuild: ['<%= buildDir %>/templates.js', '<%= buildDir %>/app.js', '<%= buildDir %>/tmp'],
		build: ['<%= buildDir %>'],
		options: {
			force: true
		}
	},
	copy: {
		index: {
			files: [{
				src: '<%= devDir %>/index.html',
				dest: '<%= buildDir %>/index.html'
			}]
		},
		asset: {
			files: [{
				src: ['**/*.png', '!vendor/**'],
				cwd: '<%= devDir %>',
				dest: '<%= buildDir %>/',
				expand: true
			}]
		},
		fonts: {
			files: [{
				expand: true,
				cwd: '<%= devDir %>/vendor/bootstrap/fonts/',
				src: '*',
				dest: '<%= buildDir %>/fonts'
			}, {
				expand: true,
				cwd: '<%= devDir %>/',
				src: 'modules/*/fonts/*',
				dest: '<%= buildDir %>'
			}]
		}
	},
	requirejs: {
		compile: {
			options: {
				baseUrl: "<%= devDir %>",
				out: '<%= buildDir %>/app.min.js',
				mainConfigFile: "<%= devDir %>/main.prod.js",
				name: 'main.prod',
				include: [
					'vendor/requirejs/require',
					'<%= buildDir %>/templates.js'
				],
				optimize: 'uglify2',
				generateSourceMaps: true,
				preserveLicenseComments: false,
				useSourceUrl: false
			}
		}
	},
	useminPrepare: {
		html: '<%= devDir %>/index.html',
		options: {
			dest: '<%= buildDir %>',
			staging: '<%= buildDir %>/tmp',
			flow: {
				html: {
					steps: {
						'js': [],
						'css': ['concat', 'cssmin']
					},
					post: []
				}
			}
		}
	},

	usemin: {
		html: '<%= buildDir %>/index.html'
	},

	ngtemplates: {
		retirementPlannning: {
			cwd: '<%= devDir %>',
			src: '**/*.tpl.html',
			dest: '<%= buildDir %>/templates.js',
			options: {
				bootstrap: function(module, script) {
					return 'var initTemplates = function(){ angular.module("modular-angular-seed").run(["$templateCache", function($templateCache) {' + script + ' }]);};';
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
				TEST : false
			}
		},
		build : {
			src: '<%= devDir %>/main.js',
			dest: '<%= devDir %>/main.prod.js',
			options: {
				context: {
					CUSTOMER_REQUIRE: customersModulesConfig.getGustomerModules(customer).paths,
					CUSTOMER_MODULES: customersModulesConfig.getGustomerModules(customer).names
				}
			}
		}
	}
};