angular.module('app')
.factory('contacts', ['$http', function($http) {
  var o = {
    contacts: []
  }
  o.all = function() {
    return $http.get('/api/v1/contacts.json').success(function(response) {
      angular.copy(response, o.contacts)
    });
  }
  return o;
}])