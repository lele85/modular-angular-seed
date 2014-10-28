define([], function() {
	"use strict";
	var State = function($stateProvider) {
		$stateProvider.state('second_hello', {
			url: "/second/hello",
			templateUrl: 'modules/second/view/hello.tpl.html'
		});
	};
	return ["$stateProvider", State];
});