(function() {
  "use strict";

  angular.module("app").controller("contactsCtrl", ['$scope', '$stateParams', 'contacts', function($scope, $stateParams, contacts) {
    window.$scope = $scope;
    window.contacts = contacts;

    $scope.index = function() {
      $scope.contacts = contacts.contacts
      $scope.keys = Object.keys(contacts.contacts[0]).filter(function(key) {
        return ["id", "updated_at", "created_at", "user_id", "active"].indexOf(key) == -1
      })
      $scope.columnHeaders = [];
      for (var i=0; i < $scope.keys.length; i++) {
        $scope.columnHeaders[i] = $scope.keys[i].replace(/_/g, " ").replace(/(^|\s)[a-z]/g,function(f) {
          return f.toUpperCase();
        });
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