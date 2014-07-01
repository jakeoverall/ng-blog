/* global app:true */
'use strict';

/**
 * @ngdoc overview
 * @name ngBlogApp
 * @description
 * # ngBlogApp
 *
 * Main module of the application.
 */
var app = angular.module('ngBlogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
])
.constant('FIREBASE_URL', 'https://sizzling-fire-2867.firebaseio.com/');

app.config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
      })
        .when('/posts', {
            templateUrl: 'views/posts.html',
            controller: 'postsCtrl'
        })
      .otherwise({
          redirectTo: '/'
      });
});
