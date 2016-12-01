const angular = require('angular');

const StoreService = require('./store.service');

const storeModule = angular.module('core.Store', [
]);

storeModule
    .service('Store', StoreService);

module.exports = storeModule;
