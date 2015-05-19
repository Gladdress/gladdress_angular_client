angular.module('starterapp').factory('ContactsService', function($http, rfc4122, Base64) {
	var factory = {};

	var customers = {};

	factory.findAll = function() {
        customers = $http.get('http://localhost:54331/contacts/')
            .then(function(response) {
                return response.data;
            });
		return customers;
	};

	factory.findById = function(id) {
		return customers.then(function(data) {
            return _.find(data, {GladId: id});
		});
	};

	factory.delete = function(contact) {
        return $http.delete('http://localhost:54331/contacts/' + contact.GladId);
	};

	factory.create = function(newContactData) {
        return $http.post('http://localhost:54331/contacts', {GladId:newContactData.GladId});
	};

	return factory;
});