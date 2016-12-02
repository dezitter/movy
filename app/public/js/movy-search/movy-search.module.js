const angular = require('angular');

const MovySearchComponent = require('./movy-search.component');
const MovySearchFormModule = require('./movy-search-form/movy-search-form.module');
const MovySearchResultModule = require('./movy-search-result/movy-search-result.module');

const movySearchModule = angular.module('movySearch', [
    MovySearchFormModule.name,
    MovySearchResultModule.name
]);

movySearchModule
    .component('movySearch', MovySearchComponent);

module.exports = movySearchModule;
