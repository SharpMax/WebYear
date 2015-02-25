'use strict';

/**
 * @ngdoc function
 * @name webyearApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webyearApp
 */
angular.module('webyearApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
