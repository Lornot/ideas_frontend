'use strict';

angular.module('myApp.ideas')
    .controller('addController', ['$scope', 'Api', '$window', function ($scope, Api, $window) {
        $scope.idea = {
            
        };

        $scope.add = function(idea) {
            
            /** @todo add validation */

            console.log(JSON.stringify(idea));

            Api.post(idea)
                .then(function(result){
                    console.log('result', result);
                    $window.location.href = '#!ideas/overview'
                }, function(error) {
                    console.log('error', error);
                })
        };

    }]);