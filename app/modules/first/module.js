define(["modules/first/routes"], function(Routes) {
	"use strict";
	var MODULE_NAME = "First";
	angular.module(MODULE_NAME, ["Common"])
		.config(Routes);
	return MODULE_NAME;
});