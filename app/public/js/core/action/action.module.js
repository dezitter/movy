const angular = require('angular');

const MovieActionFactory = require('./movie-action.factory');

const movieModule = angular.module('core.Action', [
]);

movieModule
    .factory('MovieAction', MovieActionFactory);

module.exports = movieModule;
