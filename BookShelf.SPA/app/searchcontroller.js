﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('searchController', searchController);

    //searchController.$inject = ['$location']; 

    function searchController($scope, $http) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'searchController';

        activate();

        function activate() { }

        $scope.search = function () {
            
            var url = 'https://www.googleapis.com/books/v1/volumes?maxResults=12&q=' + $scope.searchTerm

            $http.get(url)
                .then(function (response) {
                    $scope.searchResults = response.data;
                });
            };
    }
})();
