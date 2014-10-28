define([
	"modules/common/routes",
	"modules/common/controller/Dashboard",
	"modules/common/directive/IfUiSref"
], function(
	Routes,
	DashboardController,
	IfUiSref
) {
	"use strict";
	var MODULE_NAME = "Common";
	angular.module(MODULE_NAME, ["ui.router"])
		.directive("ifUiSref", IfUiSref)
		.controller("DashboardController", DashboardController)
		.config(Routes);
	return MODULE_NAME;
});