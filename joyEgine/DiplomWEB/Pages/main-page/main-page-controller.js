"use strict";
angular.module('DiplomApp').controller('MainController', MainController);

MainController.$inject = ['$scope', '$http'];

function MainController($scope, $http) {
    var vm = this;

    vm.actions = {
    }

    init();


    function init() {
        $http.get('/api/api/Values').then(r => {
            console.log(3)
        });
        $http.get('/api/api/Values', { params: { id: 1 } }).then(r => {
            console.log(3)
        });
        $http.get('/api/api/Values', { params: { id1: 1, id2: 2 } }).then(r => {
            console.log(3)
        });
    }
}



