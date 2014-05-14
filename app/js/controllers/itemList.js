'use strict';

angular.module('EL').controller('ItemListController', function ($scope) {

    // model
    $scope.model = {
        itemList: [
            'item 1',
            'item 2',
            'item 3',
            'item 4'
        ]
    };

    // actions
    $scope.action = {
        addItem: function (item) {
            $scope.itemList.push(item);
        }
    };

});