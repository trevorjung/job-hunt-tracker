(function() {
  "use strict";

  angular.module("app", ['ui.router', 'templates'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
      .state('contacts', {
        url: '',
        templateUrl: 'contacts/_contacts.html',
        controller: 'contactsCtrl',
        resolve: {
          contactsPromise: ['contacts', function(contacts){
            return contacts.all();
          }]
        }
      })
      .state('contact', {
        url: '/contacts/{id}',
        templateUrl: 'contacts/_contact.html',
        controller: 'contactsCtrl',
        resolve: {
          contactPromise: ['$stateParams', 'contacts', function($stateParams, contacts){
            return contacts.find($stateParams.id);
          }]
        }
      });

      $urlRouterProvider.otherwise('');
    }])

}());