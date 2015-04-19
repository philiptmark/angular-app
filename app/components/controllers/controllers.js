'use strict';

var recipesListController = angular.module('recipesListController', []);

recipesListController.controller('recipesListCtrl', function ($scope, $filter){
	

	$scope.testFunction = function(){
		var recipes = [
		{'name': 'Chicken rice'},
		{'name': 'Chicken & rice'},
		{'name': 'Pasta carbonara'},
		{'name': 'Fried chicken'},
		{'name': 'Pasta bolognese'},
		{'name': 'French fries'},
		{'name': 'Baked potato'}
	];

	$scope.recipes = $filter('equalSearchString')(recipes, $scope.myInput.recipe);
	
	};
});