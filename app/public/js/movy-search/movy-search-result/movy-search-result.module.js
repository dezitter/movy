const angular = require('angular');

const MovySearchResultComponent = require('./movy-search-result.component');

const movySearchResultModule = angular.module('movySearchResult', [
]);

movySearchResultModule
    .component('movySearchResult', MovySearchResultComponent);

module.exports = movySearchResultModule;
