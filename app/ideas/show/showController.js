'use strict';

angular.module('myApp.ideas')
    .controller('showController', ['$scope', 'Api', '$filter', '$routeParams',function($scope, Api, $window, $routeParams){

        $scope.idea = [];
        Api.get($routeParams.id)
            .then(function(result){
                console.log(result);
                $scope.idea = result.data;
            }, function(error){
                console.log(error);
            })
    }]);