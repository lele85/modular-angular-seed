require.config({
  paths: {
    jquery: 'vendor/jquery/dist/jquery',
    angular: 'vendor/angular/angular',
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
    'angularBootstrap': ['angular'],
    'angularUiRouter': ['angular'],
    'angularTouch': ['angular']
  }
});


require([
  "angular",
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
  ], function(
/* @echo CUSTOMER_MODULES */
  ) {
    var appName = "modular-angular-seed";
    var app = angular.module(
      appName, [
/* @echo CUSTOMER_MODULES */
      ]
    );

    if (typeof initTemplates === 'function') {
      initTemplates();
    }

    angular.element().ready(function() {
      angular.bootstrap(document, [appName]);
    });
  });
};