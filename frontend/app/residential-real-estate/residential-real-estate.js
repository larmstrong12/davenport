'use strict';

angular.module('myApp.residential-real-estate', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/residential-real-estate', {
    templateUrl: 'residential-real-estate/residential-real-estate.html',
    controller: 'ResidentialRealEstateCtrl'
  });
}])

.controller('ResidentialRealEstateCtrl', [function() {

}]);