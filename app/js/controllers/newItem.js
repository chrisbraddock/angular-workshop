'use strict';

angular.module('EL').controller('NewItemController', function ($scope) {

    // model
    $scope.model = {
        newItemName: ''
    };

    // actions
    $scope.action = {
        addNewItem: function () {
            app.itemList.push({ task: $scope.model.newItemName });
            $scope.model.newItemName = '';
        }
    };

});