import angular from "angular";
// @if TEST
import angularMocks from "angularMocks";
// @endif
import angularBootstrap from "angularBootstrap";
import angularUiRouter from "angularUiRouter";
import angularTouch from "angularTouch";
import lodash from "lodash";
/* @echo CUSTOMER_IMPORT */
/* @echo CUSTOMER_IMPORT_TEST */
var appName = "modular-angular-seed";
var appModule = angular.module(appName, [
	/* @echo CUSTOMER_MODULES */
]);

if (typeof initTemplates === 'function') {
	initTemplates();
}

// @if !TEST
angular.element().ready(function() {
	angular.bootstrap(document, [appName]);
});
// @endif