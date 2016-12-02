const angular = require('angular');

const MovySearchResultComponent = require('./movy-search-result.component');
const MovySearchResultItemModule = require('./movy-search-result-item/movy-search-result-item.module');

const movySearchResultModule = angular.module('movySearchResult', [
    MovySearchResultItemModule.name
]);

movySearchResultModule
    .component('movySearchResult', MovySearchResultComponent);

module.exports = movySearchResultModule;
