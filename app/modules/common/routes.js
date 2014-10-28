define([], function() {
	"use strict";
	var State = function($stateProvider) {
		$stateProvider.state('error', {
			url: "/error",
			templateUrl: 'modules/common/view/error.tpl.html'
		}).state('dashboard', {
			url: "/",
			templateUrl: 'modules/common/view/dashboard.tpl.html',
			controller : 'DashboardController'
		});
	};
	return ["$stateProvider", State];
});