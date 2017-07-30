'use strict';

angular.module('myApp.ideas')
    .controller('updateController', [
        '$scope',
        'Api',
        '$window',
        '$routeParams',
        function ($scope, Api, $window, $routeParams) {
            $scope.ideas = {};
            Api.get($routeParams.id)
                .then(function(result) {
                    console.log('result', result);
                    $scope.ideas = result.data;
                }, function (error) {
                    console.log('error', error)
                });

            $scope.update = function(ideas) {
                Api.put(ideas.id, ideas)
                    .then(function (response) {
                        console.log('response', response);
                        $window.location.href = '#!list'
                    }, function (error) {
                        console.log('error', error)
                    })
            }


    }]);