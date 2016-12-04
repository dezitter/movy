const angular = require('angular');

const MovyFilterSortControlComponent = require('./movy-filter-sort-control.component');

const movyFilterSortControlModule = angular.module('movyFilterSortControl', [
]);

movyFilterSortControlModule
    .component('movyFilterSortControl', MovyFilterSortControlComponent);

module.exports = movyFilterSortControlModule;
