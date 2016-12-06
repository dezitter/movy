const angular = require('angular');

const ActionModule = require('./action/action.module');
const MovieModule = require('./movie/movie.module');
const StoreModule = require('./store/store.module');

const coreModule = angular.module('core', [
    ActionModule.name,
    MovieModule.name,
    StoreModule.name
]);

module.exports = coreModule;
