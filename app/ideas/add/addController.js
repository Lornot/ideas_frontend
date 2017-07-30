'use strict';

angular.module('myApp.ideas')
    .controller('addController', ['$scope', 'Api', '$window', function ($scope, Api, $window) {
        $scope.idea = {
            "keywords" : [
                { text: 'just' },
                { text: 'some' },
                { text: 'cool' },
                { text: 'tags' }
            ]
        };

        $scope.add = function(ideas) {

            alert('Adding started');

            /*Api.post(ideas)
                .then(function (result) {
                    console.log('result', result);
                    $window.location.href = '#!list'
                }, function (error) {
                    console.log('error', error)
                })*/
        };


        $scope.autocomplete = function () {
            
        }
        
    }]);