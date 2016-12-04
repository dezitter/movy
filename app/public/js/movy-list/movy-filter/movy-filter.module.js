const angular = require('angular');

const MovyFilterComponent = require('./movy-filter.component');

const movyFilterModule = angular.module('movyFilter', [
]);

movyFilterModule
    .component('movyFilter', MovyFilterComponent);

module.exports = movyFilterModule;
