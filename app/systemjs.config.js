/*global System*/
System.config({
	// @if TEST
	baseURL: "/base",
	// @endif
	map: {
		jquery: 'vendor/jquery/dist/jquery',
		angular: 'vendor/angular/angular',
		// @if TEST
    	angularMocks: 'vendor/angular-mocks/angular-mocks',
    	// @endif
		angularBootstrap: 'vendor/angular-bootstrap/ui-bootstrap-tpls',
		angularUiRouter: 'vendor/angular-ui-router/release/angular-ui-router',
		angularTouch: 'vendor/angular-touch/angular-touch',
		lodash: 'vendor/lodash/dist/lodash'
	},
	meta: {
		'vendor/lodash/dist/lodash': {
			format: "global",
			exports: "_"
		},
		// @if TEST
    	'vendor/angular-mocks/angular-mocks': ['angular'],
    	// @endif
		'vendor/angular/angular': {
			format: "global",
			exports: "angular",
			deps: ["jquery"]
		},
		'vendor/angular-ui-router/release/angular-ui-router': {
			deps: ["angular"]
		},
		'vendor/angular-touch/angular-touch': {
			deps: ['angular']
		},
		'vendor/angular-bootstrap/ui-bootstrap-tpls': {
			deps: ['angular']
		},
	}
});
