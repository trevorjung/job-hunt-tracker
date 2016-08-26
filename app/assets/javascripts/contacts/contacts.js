angular.module('app')
.factory('contacts', ['$http', function($http) {
  var o = {
    contacts: [],
    contact: {}
  }
  o.all = function() {
    return $http.get('/api/v1/contacts.json').then(function(response) {
      angular.copy(response.data, o.contacts);
    });
  }
  o.find = function(id) {
    return $http.get("/api/v1/contacts/" + id +".json").then(function(response) {
      angular.copy(response.data, o.contact);
    });
  }
  o.create = function(contact) {
    return $http.post('/api/v1/contacts.json', contact).then(function(response) {
      o.contacts.push(response.data)
    });
  }
  o.update = function(contact) {
    return $http.patch('/api/v1/contacts/' + contact.id + ".json", contact).then(function(response) {
    });
  }
  o.destroy = function(contact) {
    return $http.delete('/api/v1/contacts/' + contact.id + ".json").then(function(response) {
      
    });
  }
  return o;
}])
