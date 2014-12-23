import {Routes} from "modules/common/routes";
import {DashboardController} from "modules/common/controller/Dashboard";
import {IfUiSref} from "modules/common/directive/IfUiSref";

var MODULE_NAME = "Common";

export var CommonModule = angular.module(MODULE_NAME, ["ui.router"])
	.directive("ifUiSref", IfUiSref)
	.controller("DashboardController", DashboardController)
	.config(Routes);