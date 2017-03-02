'use strict';

angular.module('myApp.right-of-way', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/right-of-way', {
    templateUrl: 'right-of-way/right-of-way.html',
    controller: 'RightOfWayCtrl'
  });
}])

.controller('RightOfWayCtrl', [function() {

}]);