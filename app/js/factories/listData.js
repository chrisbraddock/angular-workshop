'use strict';

angular.module('EL').factory('listData', function ($q, $http) {
    var itemsDef;

    function getItems() {
        if (itemsDef) { return itemsDef.promise; }
        itemsDef = $q.defer();

        $http.get('/endpoint/list.json').then(function (res) {
            itemsDef.resolve(res.data);
        }, function () {
            itemsDef.resolve([]);
        });

        return itemsDef.promise;
    }

    return {
        getItems: getItems
    };
});