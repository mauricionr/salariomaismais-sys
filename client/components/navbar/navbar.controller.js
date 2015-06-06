'use strict';

angular.module('salariomaismaisApp')
  .controller('NavbarCtrl', function ($scope, $location) {
  $scope.menu = [
    {
      'title': 'Home',
      'link': '/'
    },
    // {
    //   'title': 'Vagas',
    //   'link': '/vagas'
    // },
    {
      'title': 'Sobre',
      'link': '/about'
    }
  ];

  $scope.isCollapsed = true;

  $scope.isActive = function (route) {
    return route === $location.path();
  };
});