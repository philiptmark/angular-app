'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'recipesListController',
  'firstAngularAppFilters'
]).
config(['$routeProvider', 
	function($routeProvider) {
  $routeProvider.
when('/view1',{
	templateUrl: 'view1/view1.html',
	controller: 'recipesListCtrl'
}).
when('/view2',{
	templateUrl: 'view2/view2.html',
	controller: 'recipesListCtrl'
}).
when('/view1/:recipeId',{
	templateUrl: 'view2/view2.html',
	controller: 'recipesListCtrl'
}).
  otherwise({redirectTo: '/view1'});
}]);
