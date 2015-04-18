'use strict';

var recipesListController = angular.module('recipesListController', []);

recipesListController.controller('recipesListCtrl', function ($scope, $filter){
	

	$scope.testFunction = function(){
		var recipes = [
		{'name': 'Chicken & rice'},
		{'name': 'Pasta carbonara'},
		{'name': 'Fried chicken'}
	];

	$scope.recipes = $filter('filter')(recipes, $scope.myInput.recipe);
	
	};
});