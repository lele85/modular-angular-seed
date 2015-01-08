// @if !TEST
System.baseURL = "/";
System.import("systemjs.main.prod");
// @endif

// @if TEST
System.baseURL = "/base";
__karma__.loaded = function() {};
System.import("systemjs.main.test").then(function(){
	window.__karma__.start();
});
// @endif