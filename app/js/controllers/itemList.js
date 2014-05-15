'use strict';

angular.module('EL').controller('ItemListController', function ($scope, listData) {

    // model
    $scope.model = {
        itemList: []
    };

    // actions
    $scope.action = {
        addItem: function (item) {
            $scope.model.itemList.push(item);
        },
        toggle: function (idx) {
            $scope.model.itemList[idx].done = !$scope.model.itemList[idx].done;
        }
    };

    $scope.$root.$on('newItem', function (e, data) {
        $scope.action.addItem(data);
    });

    listData.getItems().then(function (data) {
        $scope.model.itemList = data;
    });

});