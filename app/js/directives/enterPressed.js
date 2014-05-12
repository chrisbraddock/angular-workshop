'use strict';

angular.module('EL').directive('enterPressed', function($rootScope) {
    return {
        restrict: 'A',
        scope: {
            action: '&enterPressed'
        },
        link: function(scope, elem, attrs) {
            elem.bind('keypress', function(e) {
                if (e.which === 13) {
                    $rootScope.$apply(function () {
                        scope.action();
                    });
                }
            });
        }
    };
});