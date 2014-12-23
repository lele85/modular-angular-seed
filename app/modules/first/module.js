import {Routes} from "modules/first/routes";

var MODULE_NAME = "First";
export var FirstModule = angular.module(MODULE_NAME, ["Common"])
	.config(Routes);