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
      .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'AuthCtrl'
      })
        .when('/posts', {
            templateUrl: 'views/posts.html',
            controller: 'postsCtrl'
        })
        .when('/posts/postId', {
            templateUrl: 'views/showpost.html',
            controller: 'PostViewCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'AuthCtrl'
        })
      .otherwise({
          redirectTo: '/'
      });
});
