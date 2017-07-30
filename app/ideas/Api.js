'use strict';

angular.module('myApp.ideas')
    .factory('Api', [
        '$http',
        function ($http) {
            var ROOT_URL = 'http://symfony/web/app_dev.php/api/ideas/';

            function get(id) {
                console.log(ROOT_URL+'get/'+id);
                return $http.get(ROOT_URL+'get/'+id)
            }

            function getAll() {
                return $http.get(ROOT_URL+'get_all');
            }
            
            function post(idea) {
                return $http.post(ROOT_URL+'add', idea)
            }

            function put(id, data) {
                return $http.put(ROOT_URL+'update/'+id, data)
            }

            function remove(id) {
                return $http.delete(ROOT_URL+'remove/'+id)
            }

            return {
                get:    get,
                getAll: getAll,
                post:   post,
                put:    put,
                remove: remove
            }
        }
    ]);