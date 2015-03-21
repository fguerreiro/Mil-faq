'use strict';
/**
 * @ngdoc function
 * @name milfaqApp.controller:UsersControlles
 * @description
 * # UsersControlles
 * Controller of the milfaqApp
 */

angular.module('milfaqApp')

.controller('ProblemsIndexController', ['$scope', 'problemsFactory', function($scope, problemsFactory) {
       
    $scope.orderByField = 'descricao';
    $scope.reverseSort = false;

    $scope.index = function(){
        problemsFactory.index().$promise.then(
        //success
          function( data ){
            console.log( data );
            $scope.problems = data;
            
          },
          //error
          function( error ){
            console.log( error );
            $scope.error = error;
          }

        );
    };

    $scope.destroy = function(user) {
        problemsFactory.destroy({id: problems.id}).$promise.then(
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

.controller('ProblemsShowController', ['$scope', '$stateParams', 'problemsFactory', function($scope, $stateParams, problemsFactory) {
    $scope.problem = problemsFactory.show({id: $stateParams.id});

    problemsFactory.show({id: $stateParams.id}).$promise.then(
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
}]);