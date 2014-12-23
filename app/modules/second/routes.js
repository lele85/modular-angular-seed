var State = function($stateProvider) {
	$stateProvider.state('second_hello', {
		url: "/second/hello",
		templateUrl: 'modules/second/view/hello.tpl.html'
	});
};

export var Routes = ["$stateProvider", '$urlRouterProvider', State];