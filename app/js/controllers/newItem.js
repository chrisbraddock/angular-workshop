'use strict';

angular.module('EL').controller('NewItemController', function ($scope) {

    // model
    $scope.model = {
        newItemName: ''
    };

    // actions
    $scope.action = {
        addNewItem: function () {
            alert('adding new item: ' + $scope.model.newItemName);
            $scope.model.newItemName = '';
        }
    };

});