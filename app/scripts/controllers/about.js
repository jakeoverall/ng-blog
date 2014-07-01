'use strict';

/**
 * @ngdoc function
 * @name ngBlogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngBlogApp
 */
angular.module('ngBlogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
