'use strict';

var recipesListController = angular.module('recipesListController', []);

//Get all the recipes from the .json file and filter them by scope.myInput.recipe
recipesListController.controller('recipesListCtrl', ['$scope', '$routeParams', '$http', '$location', '$filter',
	function($scope, $routeParams, $http, $location, $filter) {
		$scope.searchRecipes = function(){
			var recipes = [];
			$location.path('view1');
			$http.get('recipes/recipes.json').success(function(data) {
				recipes = data;

				$scope.recipes = $filter('equalSearchString')(recipes, $scope.myInput.recipe);

			});


		};



	}]);

//Gets data for the selected recipe
recipesListController.controller('recipeItemCtrl', ['$scope', '$routeParams', '$http', '$filter',
	function($scope, $routeParams, $http, $filter){

		var url = 'recipes/' + $routeParams.recipeId + '.json';

		$http.get(url).success(function(data) {
			$scope.selectedRecipe = data;
			console.log(data.ingredients);
		});

		console.log($routeParams.recipeId);
		console.log('searchTerm: ' + $routeParams.keyword);

		
			var recipes = [];
			$http.get('recipes/recipes.json').success(function(data) {
				recipes = data;

				$scope.recipes = $filter('keyword')(recipes, $routeParams.keyword);

			});


		

	}]);