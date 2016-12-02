const angular = require('angular');

const MovySearchFormComponent = require('./movy-search-form.component');

const movySearchFormModule = angular.module('movySearchForm', [
]);

movySearchFormModule
    .component('movySearchForm', MovySearchFormComponent);

module.exports = movySearchFormModule;
