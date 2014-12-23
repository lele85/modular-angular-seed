var State = function($stateProvider) {
	$stateProvider.state('first_hello', {
		url: "/first/hello",
		templateUrl: 'modules/first/view/hello.tpl.html'
	});
};

export var Routes = ["$stateProvider", '$urlRouterProvider', State];