const angular = require('angular');

const MovieModule = require('./movie/movie.module');
const StoreModule = require('./store/store.module');

const coreModule = angular.module('core', [
    MovieModule.name,
    StoreModule.name
]);

module.exports = coreModule;
