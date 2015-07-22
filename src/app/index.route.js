(function() {
  'use strict';

  angular
    .module('myapp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('query', {
        url: '/query',
        templateUrl: 'app/query/query.html',
        controller: 'QueryController',
        controllerAs: 'query'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
