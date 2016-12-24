const angular = require('angular');

const ActionModule = require('./action/action.module');
const MovieModule = require('./movie/movie.module');
const StoreModule = require('./store/store.module');
const JoinFilterFactory = require('./filter/join-filter/join-filter.factory');
const PadFilterFactory = require('./filter/pad-filter/pad-filter.factory');

const coreModule = angular.module('core', [
    ActionModule.name,
    MovieModule.name,
    StoreModule.name
]);

coreModule
    .filter('joinFilter', JoinFilterFactory)
    .filter('padFilter', PadFilterFactory)
    .value('initialState', global.MOVY.initialState);

module.exports = coreModule;
