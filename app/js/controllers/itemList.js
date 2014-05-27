'use strict';

app.controller('ItemListController', [
    '$scope',
    '$rootScope',
    '$http',
    'Data',
    function ($scope, $rootScope, $http, Data) {

        // init to existing tasks from DB
        $scope.model = {
            tasks: Data.get('tasks')
        };

        // when tasks are created, update our view model
        $rootScope.$on('task:created', function (task) {
            $scope.model.tasks = Data.get('tasks');
        });

        // when tasks change at all, persist them to DB
        $scope.$watch('model.tasks', function (tasks) {
            Data.set('tasks', tasks);
        }, true);

        $scope.action = {
            displayMore: function (e) {
                console.log('hovered over: ' + e.getAttribute('data-value'));
            }
        };

    }
]);
