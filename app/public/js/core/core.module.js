const angular = require('angular');

const MovieModule = require('./movie/movie.module');

const coreModule = angular.module('core', [
    MovieModule.name
]);

module.exports = coreModule;
