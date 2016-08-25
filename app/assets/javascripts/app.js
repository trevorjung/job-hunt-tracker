(function() {
  "use strict";

  angular.module("app", ['ui.router', 'templates'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'contacts/_contacts.html',
        controller: 'contactsCtrl',
        resolve: {
          postPromise: ['contacts', function(contacts){
            return contacts.all();
          }]
        }
      });

      $urlRouterProvider.otherwise('');
    }])

}());