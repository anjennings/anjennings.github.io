'use strict';

/**
 * @ngdoc overview
 * @name selfWebsiteApp
 * @description
 * # selfWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('selfWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
