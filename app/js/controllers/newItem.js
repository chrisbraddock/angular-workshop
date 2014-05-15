'use strict';

angular.module('EL').controller('NewItemController', function ($scope) {

    // model
    $scope.model = {
        newItemName: ''
    };

    // actions
    $scope.action = {
        addNewItem: function () {
            $scope.$emit('newItem', {
                task: $scope.model.newItemName,
                done: false,
                tags: []
            });
            $scope.model.newItemName = '';
        }
    };

});