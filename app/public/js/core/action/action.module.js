const angular = require('angular');

const FilterActionFactory = require('./filter-action.factory');
const MovieActionFactory = require('./movie-action.factory');
const PagerActionFactory = require('./pager-action.factory');
const ModeActionFactory = require('./mode-action.factory');

const movieModule = angular.module('core.Action', [
]);

movieModule
    .factory('FilterAction', FilterActionFactory)
    .factory('MovieAction', MovieActionFactory)
    .factory('PagerAction', PagerActionFactory)
    .factory('ModeAction', ModeActionFactory);

module.exports = movieModule;
