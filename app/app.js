'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'recipesListController',
  'firstAngularAppFilters'
]).
config(['$routeProvider', 
	function($routeProvider) {
  $routeProvider.
when('/startView',{
  templateUrl: 'partials/startView/startView.html',
  controller: 'recipesListCtrl'
}).
when('/view1',{
	templateUrl: 'partials/view1/view1.html',
	controller: 'recipesListCtrl'
}).
when('/view2',{
	templateUrl: 'partials/view2/view2.html',
	controller: 'recipeItemCtrl'
}).
when('/view1/:recipeId',{
	templateUrl: 'partials/view2/view2.html',
	controller: 'recipeItemCtrl'
}).
  otherwise({redirectTo: '/startView'});
}]);
