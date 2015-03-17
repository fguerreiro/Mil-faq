 'use strict';
/**
* @ngdoc function
* @name olimpoWebApp.Service:cargosService
* @description
* # cargosService
* Service of the olimpoWebApp
*/
angular.module('usersFactory',[])
.factory('usersFactory', ['$resource',function ($resource) {
	return $resource('http://0.0.0.0:3000/usuarios/:id/.json', { id: '@_id' },
	{
		'create':  { method: 'POST' },
		'index':   { method: 'GET', isArray: true },
		'show':    { method: 'GET', isArray: false },
		'update':  { method: 'PUT' },
		'destroy': { method: 'DELETE' }
	}
);
}]);

