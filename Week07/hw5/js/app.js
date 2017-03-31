const myApp = angular.module('myApp', ['ngRoute'])
.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}])
.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            controller: 'ListController',
            templateUrl: 'views/main.html'
        })
        .when('/directives', {
            templateUrl: '/'
        })
        .when('/filters', {
            templateUrl: 'views/filters.html'
        })
        .when('/form', {
            controller: 'ListController',
            templateUrl: 'views/form.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}])
