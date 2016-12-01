const angular = require('angular');

const CoreModule = require('./core/core.module');
const MovyListModule = require('./movy-list/movy-list.module');

const movyModule = angular.module('movyApp', [
    CoreModule.name,
    MovyListModule.name
]);

module.exports = movyModule;
