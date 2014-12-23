import {Routes} from "modules/second/routes";

var MODULE_NAME = "Second";
export var SecondModule = angular.module(MODULE_NAME, ["Common"])
	.config(Routes);