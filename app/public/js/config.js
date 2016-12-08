const BodyTemplate = require('../../views/includes/body.pug');
const MovyDetailsController = require('./movy-details/movy-details.controller');

function config($routeProvider) {
    $routeProvider
        .when('/details/:_id', {
            controller: MovyDetailsController,
            template: '<movy-details movy-movie="movie">'
        })
        .otherwise({
            template: BodyTemplate()
        });
}

module.exports = ['$routeProvider', config];
