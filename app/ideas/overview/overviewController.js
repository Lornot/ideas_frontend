'use strict';


angular.module('myApp.ideas')
    .controller('overviewController', ['$scope', 'Api', '$filter', function($scope, Api, $filter) {

        $scope.ideas = [];

        Api.getAll()
            .then(function (result) {
                console.log('result', result);
                $scope.ideas = result.data;
            }, function (error) {
                console.log('error', error);
            });

        $scope.remove = function(id) {
            Api.remove(id)
                .then(function(result) {
                    $scope.ideas = $filter('filter')($scope.ideas, function (value, index, array) {
                        return value.id != id;

                    })
                }, function(error) {
                    console.log('error', error);
                })
        }

    }]);