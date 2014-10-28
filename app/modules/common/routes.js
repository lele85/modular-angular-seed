define([], function(){
	"use strict";
	var State = function($stateProvider) {
		$stateProvider.state('error', {
			url: "/error",
			templateUrl: 'modules/common/view/error.tpl.html'
		});
	};
	return ["$stateProvider", State];
});