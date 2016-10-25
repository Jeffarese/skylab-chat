///<reference path='../../typings/tsd.d.ts' />
module HomeCtrl {
  'use strict';

  class HomeCtrl {

    private auth;
    private ctrlName;
    // $inject annotation.
    // It provides $injector with information about dependencies to be injected into constructor
    // it is better to have it close to the constructor, because the parameters must match in count and type.
    // See http://docs.angularjs.org/guide/di
    public static $inject: Array<string> = [
        'Auth'
    ];

    // dependencies are injected via AngularJS $injector
    constructor(Auth) {
      this.auth = Auth;
      console.log(this.auth);
      this.ctrlName = 'HomeCtrl';
    }
  }


  /**
  * @ngdoc object
  * @name home.controller:HomeCtrl
  *
  * @description
  *
  */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);
}
