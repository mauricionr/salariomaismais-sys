'use strict';

angular.module('salariomaismaisApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/vagas', {
        templateUrl: 'app/vagas/vagas.html',
        controller: 'VagasCtrl'
      });
  });
