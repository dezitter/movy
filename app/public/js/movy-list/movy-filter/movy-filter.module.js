const angular = require('angular');

const MovyFilterComponent = require('./movy-filter.component');
const MovyFilterSortControlModule = require('./movy-filter-sort-control/movy-filter-sort-control.module');

const movyFilterModule = angular.module('movyFilter', [
    MovyFilterSortControlModule.name
]);

movyFilterModule
    .component('movyFilter', MovyFilterComponent);

module.exports = movyFilterModule;
