const angular = require('angular');

const StoreService = require('./store.service');

const storeModule = angular.module('core.Store', [
]);

storeModule
    .factory('Store', StoreService);

module.exports = storeModule;
