'use strict';

angular.module('EL', ['LocalStorageModule'])
.controller('ItemListController', [
    '$scope',
    '$http',
    'localStorageService',
    function ($scope, $http/*, localStorageService*/) {
//debugger;
        $scope.model = {
            itemList: []
        };

        // get items from persistence mechanism
        $http.get('endpoint/list.json').
        success(function (data) {
            app.itemList = data;
            //localStorageService.clearAll();
            //localStorageService.set('tasks', app.itemList);
            $scope.model.itemList = app.itemList;
        })
        .error(function (e) {
            debugger;
        });

        // actions
        $scope.action = {
            addItem: function (item) {
                $scope.itemList.push(item);
            },
            doneItem: function (item) {
                item.done = true;
            }
        };

    }
]);

/*
'use strict';

angular.module('EL').controller('ItemListController', function ($scope) {

    // TODO get from persistence mechanism
    app.itemList = [
        'item 1',
        'item 2',
        'item 3',
        'item 4'
    ];

    $scope.model = {
        itemList: app.itemList
    };

    // actions
    $scope.action = {
        addItem: function (item) {
            $scope.itemList.push(item);
        }
    };

});
 */