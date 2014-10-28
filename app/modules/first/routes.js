define([], function() {
	"use strict";
	var State = function($stateProvider) {
		$stateProvider.state('first_hello', {
			url: "/first/hello",
			templateUrl: 'modules/first/view/hello.tpl.html'
		});
	};
	return ["$stateProvider", State];
});