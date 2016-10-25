///<reference path='../typings/tsd.d.ts' />
module skylabChat {
  'use strict';

  angular
    .module('skylabChat')
    .config(config);

  function config($urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}
