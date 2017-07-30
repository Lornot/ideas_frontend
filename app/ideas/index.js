'use strict';

angular.module('myApp.ideas', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/ideas/overview', {
                templateUrl: 'ideas/overview/overview.html',
                controller: 'overviewController'
            })
            .when('/ideas/show/:id', {
                templateUrl: 'ideas/show/show.html',
                controller: 'showController'
            })
            .when('/ideas/add', {
                templateUrl: 'ideas/add/add.html',
                controller: 'addController'
            })
            .when('/ideas/update/:id', {
                templateUrl: 'ideas/update/update.html',
                controller: 'updateController'
            });
    }]);

