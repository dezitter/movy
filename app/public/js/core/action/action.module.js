const angular = require('angular');

const FilterActionFactory = require('./filter-action.factory');
const MovieActionFactory = require('./movie-action.factory');

const movieModule = angular.module('core.Action', [
]);

movieModule
    .factory('FilterAction', FilterActionFactory)
    .factory('MovieAction', MovieActionFactory);

module.exports = movieModule;
