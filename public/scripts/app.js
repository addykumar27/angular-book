console.log('sanity check');
var myApp = angular.module('bookApp', ['ngRoute'])
.config(config);
console.log('show book');

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: '../../templates/booksindex.html',
      controller: 'booksIndexController',
      controllerAs: 'booksIndexCtrl'  
    })
    .when('/books/:id', {
      templateUrl: '../../templates/booksshow.html',
      controller: 'booksShowController',
      controllerAs: 'booksShowCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}