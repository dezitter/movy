const angular = require('angular');

function BsActiveFactory($location) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            const anchors = element.find('a');

            scope.$on('$locationChangeSuccess', onLocationChange);

            function onLocationChange() {
                const path = $location.path();

                angular.forEach(anchors, anchor => {
                    const jqAnchor = angular.element(anchor);
                    const href = jqAnchor.attr('href');

                    if (href === path) {
                        jqAnchor.addClass('active');
                    } else {
                        jqAnchor.removeClass('active');
                    }
                });
            }
        }
    };
}

module.exports = [
    '$location',
    BsActiveFactory
];
