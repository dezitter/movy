const angular = require('angular');

const MovyFilterComponent = require('./movy-filter.component');
const MovySortControlModule = require('./movy-sort-control/movy-sort-control.module');

const movyFilterModule = angular.module('movyFilter', [
    MovySortControlModule.name
]);

movyFilterModule
    .component('movyFilter', MovyFilterComponent);

module.exports = movyFilterModule;
