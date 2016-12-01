const angular = require('angular');

const MovyListModule = require('./movy-list/movy-list.module');

const movyModule = angular.module('movyApp', [
    MovyListModule.name
]);

module.exports = movyModule;
