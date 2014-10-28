define(["modules/second/routes"], function(Routes) {
	"use strict";
	var MODULE_NAME = "Second";
	angular.module(MODULE_NAME, ["Common"])
		.config(Routes);
	return MODULE_NAME;
});