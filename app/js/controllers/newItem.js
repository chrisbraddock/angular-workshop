'use strict';

app.controller('NewItemController', [
    '$scope',
    '$rootScope',
    'Data',
    function ($scope, $rootScope, Data) {

        // model
        $scope.model = {
            newItemName: ''
        };

        // actions
        $scope.action = {
            addNewItem: function () {
                var task = {
                    name: $scope.model.newItemName,
                    done: false
                };
                // persist the task to DB
                Data.create('tasks', task);
                // notify the app that a task was created
                $rootScope.$emit('task:created', task);
                // update the view model so its ready for another add operation
                $scope.model.newItemName = '';
            }
        };

    }
]);