'use strict';
/**
 * @ngdoc function
 * @name milfaqApp.controller:UsersControlles
 * @description
 * # UsersControlles
 * Controller of the milfaqApp
 */


angular.module('milfaqApp')

.controller('UsersIndexController', ['$scope', 'usersFactory', function($scope, usersFactory) {
       
    $scope.orderByField = 'nome';
    $scope.reverseSort = false;

    $scope.index = function(){
      //$scope.users = usersFactory.index().$promise.then(
        usersFactory.index().$promise.then(
        //sucess
          function( data ){
            console.log( data );
            $scope.users = data;
            
          },
          //error
          function( error ){
            console.log( error );
            $scope.error = error;
          }

        );
    };

    $scope.destroy = function(user) {
        usersFactory.destroy({id: user.id}).$promise.then(
          //sucess
          function( data ){
            console.log( data );
            $scope.index();
          },
          //error
          function( error ){
            console.log( error );
          }
        );
    };

  $scope.index();
}])

.controller('UsersShowController', ['$scope', '$stateParams', 'usersFactory', function($scope, $stateParams, usersFactory) {
    $scope.user = usersFactory.show({id: $stateParams.id});

    usersFactory.show({id: $stateParams.id}).$promise.then(
         //sucess
          function( data ){
            console.log( data );
          },
           //error
          function( error ){
            console.log( error );
            $scope.error = error;
          }
      );
}])

.controller('UsersNewController', ['$scope', '$stateParams','$state', 'usersFactory', function($scope, $stateParams, $state ,usersFactory) {
    

    console.log('Entrou no Controller UsersNew');
    $scope.users = {};

    $scope.save = function() {
        console.log('Entrou no Controller UsersNew - funcao save');
        console.log('Usuarios -> ');
        console.log($scope.users);
        usersFactory.create($scope.users).$promise.then(
        //sucess
        function( data ){
          console.log('Entrou no Controller UsersNew - promise Success - indo para state usersIndex'); 
          console.log( data );
          $state.go('usersIndex');
        },
        //error
        function( error ){
          console.log('Entrou no Controller UsersNew - promise Fail');
          console.log( error );
        }
      );
    };

}])

.controller('UsersEditController', ['$scope', '$stateParams','$state', 'usersFactory', function($scope, $stateParams, $state, usersFactory) {
    
    $scope.users = {};

    $scope.update = function() {
      console.log($scope.users);
      $scope.users.$update({id: $scope.users.id}).then(
        function( data ) {
          console.log( data );
          $state.go('usersIndex');
        },
        function( error ){
          console.log( error );
        }
      );
    };

    $scope.load = function() {
        $scope.users = usersFactory.show({id: $stateParams.id}).$promise.then(
        //sucess
        function( data ){
          $scope.users = data;
        },
        function( error ){
          console.log ( error );
        }
      );
    };

    $scope.load();
}]);
