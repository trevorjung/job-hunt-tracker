(function() {
  "use strict";

  angular.module("app").controller("contactsCtrl", ['$scope', '$stateParams', 'contacts', function($scope, $stateParams, contacts) {
    window.$scope = $scope;


    $scope.init = function() {
      $scope.contacts = contacts.contacts
      console.log("this is running")
    }

  }]);
}());