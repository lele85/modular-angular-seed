require.config({
  // @if TEST
  baseUrl: "/base",
  // @endif
  paths: {
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
  shim: {
    'angular': {
      'deps': ['jquery'],
      'exports': 'angular'
    },
    // @if TEST
    'angularMocks': ['angular'],
    // @endif
    'angularBootstrap': ['angular'],
    'angularUiRouter': ['angular'],
    'angularTouch': ['angular']
  }
});


require([
  "angular",
  // @if TEST
  "angularMocks",
  // @endif
  "angularBootstrap",
  "angularUiRouter",
  "angularTouch",
  "lodash"
], function() {
  initApplication();
});


var initApplication = function() {
  require([
/* @echo CUSTOMER_REQUIRE */
// @if TEST
,
// @endif
/* @echo CUSTOMER_REQUIRE_TEST */
  ], function(
/* @echo CUSTOMER_MODULES */
// @if TEST
,
// @endif
/* @echo CUSTOMER_MODULES_TEST */
  ) {
    var appName = "modular-angular-seed";
    var app = angular.module(
      appName, [
/* @echo CUSTOMER_MODULES */
      ]
    );

     // @if TEST
    window.__karma__.start();
    // @endif

    if (typeof initTemplates === 'function') {
      initTemplates();
    }

    // @if !TEST
    angular.element().ready(function() {
      angular.bootstrap(document, [appName]);
    });
    // @endif
    
  });
};