/* global io */
'use strict';

angular.module('salariomaismaisApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
      var socket = io();
      socket.on('tweet', function(tweet){
        $scope.$apply(function(){
          $scope.awesomeThings.push(tweet);  
        });
      });
  });
