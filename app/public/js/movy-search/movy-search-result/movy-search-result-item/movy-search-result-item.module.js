const angular = require('angular');

const MovySearchResultItemComponent = require('./movy-search-result-item.component');

const movySearchResultItemModule = angular.module('movySearchResultItem', [
]);

movySearchResultItemModule
    .component('movySearchResultItem', MovySearchResultItemComponent);

module.exports = movySearchResultItemModule;
