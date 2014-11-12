require.config({
  baseUrl: "/base",
  paths: {
    jquery: 'vendor/jquery/dist/jquery',
    angular: 'vendor/angular/angular',
    angularMocks: 'vendor/angular-mocks/angular-mocks',
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
    'angularMocks': ['angular'],
    'angularBootstrap': ['angular'],
    'angularUiRouter': ['angular'],
    'angularTouch': ['angular']
  }
});


require([
  "angular",
  "angularMocks",
  "angularBootstrap",
  "angularUiRouter",
  "angularTouch",
  "lodash"
], function() {
  initApplication();
});


var initApplication = function() {
  require([
"modules/common/module",
"modules/first/module",
"modules/second/module"
,
"modules/common/module_test",
"modules/first/module_test",
"modules/second/module_test"
  ], function(
CommonModule,
FirstModule,
SecondModule
,
CommonModuleTest,
FirstModuleTest,
SecondModuleTest
  ) {
    var appName = "modular-angular-seed";
    var app = angular.module(
      appName, [
CommonModule,
FirstModule,
SecondModule
      ]
    );

    window.__karma__.start();
    if (typeof initTemplates === 'function') {
      initTemplates();
    }

    
  });
};