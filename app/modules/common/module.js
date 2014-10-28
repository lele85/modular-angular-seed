define([
		"modules/common/routes"
	],function(
		Routes
	){
	"use strict";
	var MODULE_NAME = "Common";
	angular
		.module(MODULE_NAME,[
			"ui.router"
		])
		.config(Routes);

	return MODULE_NAME;
});