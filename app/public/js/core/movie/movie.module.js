const angular = require('angular');

const MovieResource = require('./movie.resource');

const movieModule = angular.module('core.Movie', [
    'ngResource'
]);

movieModule
    .service('Movie', MovieResource);

module.exports = movieModule;
