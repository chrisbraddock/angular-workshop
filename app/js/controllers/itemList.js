'use strict';

angular.module('EL').controller('ItemListController', function ($scope) {

    // model
    $scope.model = {
        itemList: [
            'item 1',
            'item 2'
        ]
    };

    // actions
    $scope.action = {
        addItem: function (item) {
            $scope.itemList.push(item);
        }
    };

});