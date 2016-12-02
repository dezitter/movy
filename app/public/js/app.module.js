const angular = require('angular');

const CoreModule = require('./core/core.module');
const MovyListModule = require('./movy-list/movy-list.module');
const MovySearchModule = require('./movy-search/movy-search.module');

const movyModule = angular.module('movyApp', [
    CoreModule.name,
    MovyListModule.name,
    MovySearchModule.name
]);

module.exports = movyModule;
