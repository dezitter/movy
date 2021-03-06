const angular = require('angular');

const configFn = require('./config');
const CoreModule = require('./core/core.module');
const MovyDetailsModule = require('./movy-details/movy-details.module');
const MovyListModule = require('./movy-list/movy-list.module');
const MovySearchModule = require('./movy-search/movy-search.module');

const movyModule = angular.module('movyApp', [
    'ngRoute',
    CoreModule.name,
    MovyDetailsModule.name,
    MovyListModule.name,
    MovySearchModule.name
])
.config(configFn);

module.exports = movyModule;
