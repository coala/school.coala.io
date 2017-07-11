var app = angular.module('coala', ['ngRoute']);

 app.config(['$routeProvider',
  function($routeProvider) {
   $routeProvider.
   when('/one', {
    template: '<one></one>'
   }).
   when('/two', {
    template: '<two></two>'
   }).
   otherwise({
    redirectTo: '/one'
   });
  }]);


 app.controller('TabController', function ($location) {
  this.tab = $location.path();
  this.setTab = function (stab) {
   this.tab = stab;
   $location.path(stab);
   $(".button-collapse").sideNav('hide');
  }
  this.isSet = function (stab) {
   return $location.path() == stab
  }
 })

app.directive('one', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/one.html'
    }
})
app.directive('two', function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/two.html'
    }
})