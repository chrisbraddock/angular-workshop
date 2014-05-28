'use strict';

app.controller('ItemListController', [
    '$scope',
    '$http',
    'Data',
    function ($scope, $http, Data) {

        // init to existing items from DB
        $scope.model = {
            newItemName: '',
            items: Data.get('items')
        };

        // when items change at all, persist them to DB
        $scope.$watch('model.items', function (items) {
            Data.set('items', items);
        }, true);

        $scope.action = {
            addNewItem: function () {
                var item = {
                    name: $scope.model.newItemName,
                    done: false
                };
                // persist the item to DB
                Data.create('items', item);
                // update the view model
                $scope.model.items.push(item);
                $scope.model.newItemName = '';
            },
            displayMore: function (e) {
                console.log('hovered over: ' + e.getAttribute('data-value'));
            }
        };

    }
]);
