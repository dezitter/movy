const angular = require('angular');

const MovyListComponent = require('./movy-list.component');

const movyListModule = angular.module('movyList', [
]);

movyListModule
    .component('movyList', MovyListComponent);

module.exports = movyListModule;
