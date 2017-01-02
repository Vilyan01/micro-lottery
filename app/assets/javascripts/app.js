angular.module('lottery', ['ui.router', 'templates'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'main/_main.html',
        controller: 'MainCtrl'
      })
      .state('games', {
        url: '/games',
        templateUrl: 'games/_games.html',
        controller: 'GameCtrl'
      })

      $urlRouterProvider.otherwise('home');
    }
  ]);
