/* global app:true */
'use strict';

var app = angular.module('sossaudeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'google-maps',
  'firebase',
  'angularGeoFire'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .when('/postos', {
        templateUrl: 'views/postos.html',
        controller: 'PostosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).constant('FIREBASE_URL', 'https://radiant-fire-9988.firebaseio.com/');
