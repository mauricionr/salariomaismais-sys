/// <reference path="../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../typings/jquery/jquery.d.ts"/>
'use strict';

angular.module('salariomaismaisApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
  
  
