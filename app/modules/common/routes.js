var State = function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('error', {
		url: "/error",
		templateUrl: 'modules/common/view/error.tpl.html'
	}).state('dashboard', {
		url: "/",
		templateUrl: 'modules/common/view/dashboard.tpl.html',
		controller: 'DashboardController'
	});

	$urlRouterProvider.otherwise('/');
};

export var Routes = ["$stateProvider", '$urlRouterProvider', State];