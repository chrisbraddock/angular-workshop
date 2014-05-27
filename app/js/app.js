'use strict';

var app = angular.module('EL', [
    'ngRoute',
    'LocalStorageModule'
]).config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('angularWorkshop');
});

// persistence store mock
app.factory('Data', function (localStorageService) {
    return {
        get: function get (key) {
            return localStorageService.get(key) || [];
        },
        set: function set (key, data) {
            return localStorageService.set(key, data);
        },
        create: function create (key, item) {
            var items = this.get(key);
            items.push(item);
            this.set(key, items);
        }
    };
});
