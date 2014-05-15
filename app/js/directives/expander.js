'use strict';

angular.module('EL').directive('expander', function() {
    return {
        restrict: 'C',
        link: function(scope, element, attrs) {
            element.parent().on('mouseenter', function () {
                element.css('display', 'inline');
            });

            element.parent().on('mouseleave', function () {
                element.css('display', 'none');
            });

            element.css('display', 'none');
        }
    };
});
