'use strict';

angular.module('myApp.startView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/startView', {
    templateUrl: 'startView/startView.html',
    controller: 'startViewCtrl'
  });
}])

.controller('startViewCtrl', [function() {

}]);