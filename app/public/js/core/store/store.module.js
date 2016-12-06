const angular = require('angular');

const StoreFactory = require('./store.factory');

const storeModule = angular.module('core.Store', [
]);

storeModule
    .factory('Store', StoreFactory);

module.exports = storeModule;
