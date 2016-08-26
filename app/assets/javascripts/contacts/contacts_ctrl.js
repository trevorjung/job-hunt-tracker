(function() {
  "use strict";

  angular.module("app").controller("contactsCtrl", ['$scope', '$stateParams', 'contacts', function($scope, $stateParams, contacts) {
    window.$scope = $scope;
    window.contacts = contacts;

    $scope.index = function() {
      $scope.contacts = contacts.contacts
      $scope.keys = Object.keys(contacts.contacts[0])
      for (var i=0; i< $scope.keys.length; i++) {
        $scope.keys[i] = $scope.keys[i].replace(/_/g, " ");
      }
    }

    $scope.show = function() {
      $scope.contact = contacts.contact
    }

    $scope.update = function(contact) {
      contacts.update(contact)
      $scope.contacts = contacts.contacts
    }

  }]);
}());