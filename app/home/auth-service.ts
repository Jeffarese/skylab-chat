///<reference path='../../typings/tsd.d.ts' />
module Auth {
  'use strict';

  class Auth {
    private $firebaseAuth;
    public static $inject: Array<string> = [
        '$firebaseAuth'
    ];

    constructor($firebaseAuth) {
      this.$firebaseAuth = $firebaseAuth;
      console.log(this.$firebaseAuth);
    }

    get(): string {
      return 'Auth';
    }
  }

  /**
   * @ngdoc service
   * @name home.service:Auth
   *
   * @description
   *
   */
  angular
    .module('home')
    .service('Auth', Auth);
}
