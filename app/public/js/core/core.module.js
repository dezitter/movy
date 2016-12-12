const angular = require('angular');

const ActionModule = require('./action/action.module');
const MovieModule = require('./movie/movie.module');
const StoreModule = require('./store/store.module');
const PadFilterFactory = require('./pad-filter/pad-filter.factory');

const coreModule = angular.module('core', [
    ActionModule.name,
    MovieModule.name,
    StoreModule.name
]);

coreModule
    .filter('padFilter', PadFilterFactory);

module.exports = coreModule;
