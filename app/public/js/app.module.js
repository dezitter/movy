const angular = require('angular');

const CoreModule = require('./core/core.module');
const MovyListModule = require('./movy-list/movy-list.module');
const MovySearchFormModule = require('./movy-search-form/movy-search-form.module');

const movyModule = angular.module('movyApp', [
    CoreModule.name,
    MovyListModule.name,
    MovySearchFormModule.name
]);

module.exports = movyModule;
