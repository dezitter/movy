const angular = require('angular');

const MovySortControlComponent = require('./movy-sort-control.component');

const movySortControlModule = angular.module('movySortControl', [
]);

movySortControlModule
    .component('movySortControl', MovySortControlComponent);

module.exports = movySortControlModule;
