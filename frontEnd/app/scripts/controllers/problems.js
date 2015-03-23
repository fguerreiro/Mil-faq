'use strict';
/**
 * @ngdoc function
 * @name milfaqApp.controller:UsersControlles
 * @description
 * # UsersControlles
 * Controller of the milfaqApp
 */

angular.module('milfaqApp')

.controller('ProblemsIndexController', ['$scope', 'problemsFactory', 'usersFactory',  function($scope, problemsFactory, usersFactory) {
       
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
        usersFactory.index().$promise.then(
          //success
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
}])

.controller('ProblemsNewController', ['$scope', '$stateParams','$state', 'problemsFactory', function($scope, $stateParams, $state ,problemsFactory) {
    

    console.log('Entrou no Controller ProblemsNew');
    $scope.problems = {};

    $scope.save = function() {
        console.log('Entrou no Controller ProblemsNew - funcao save');
        console.log('Problemas -> ');
        console.log($scope.problems);
        problemsFactory.create($scope.problems).$promise.then(
        //sucess
        function( data ){
          console.log('Entrou no Controller problemsNew - promise Success - indo para state usersIndex'); 
          console.log( data );
          $state.go('problemsIndex');
        },
        //error
        function( error ){
          console.log('Entrou no Controller problemsNew - promise Fail');
          console.log( error );
        }
      );
    };

}])

.controller('ProblemsEditController', ['$scope', '$stateParams','$state', 'problemsFactory', function($scope, $stateParams, $state, problemsFactory) {
    
    $scope.problems = {};

    $scope.update = function() {
      console.log($scope.problems);
      $scope.problems.$update({id: $scope.problems.id}).then(
        function( data ) {
          console.log( data );
          $state.go('problemsIndex');
        },
        function( error ){
          console.log( error );
        }
      );
    };

    $scope.load = function() {
        $scope.problems = problemsFactory.show({id: $stateParams.id}).$promise.then(
        //sucess
        function( data ){
          $scope.problems = data;
        },
        function( error ){
          console.log ( error );
        }
      );
    };

    $scope.load();
}]);