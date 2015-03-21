'use strict';

angular.module('usersFactory',[])
.factory('usersFactory', ['$resource',function ($resource) {
	return $resource('http://127.0.0.1:3000/usuarios/:id/.json', { id: '@_id' },
	{
		'create':  { method: 'POST' },
		'index':   { method: 'GET', isArray: true },
		'show':    { method: 'GET', isArray: false },
		'update':  { method: 'PUT' },
		'destroy': { method: 'DELETE' }
	}
);
}]);


