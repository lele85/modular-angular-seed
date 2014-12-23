var Directive = function($state, ngIfDirective) {
	var ngIf = ngIfDirective[0];

	return {
		transclude: ngIf.transclude,
		priority: ngIf.priority,
		terminal: ngIf.terminal,
		restrict: ngIf.restrict,
		link: function($scope, $element, $attr) {
			var state = $attr['ifUiSref'];
			var condition = $state.get(state) ? true : false;

			$attr.ngIf = function() {
				return condition;
			};
			ngIf.link.apply(ngIf, arguments);
		}
	};
};
export var IfUiSref = ["$state", "ngIfDirective", Directive];