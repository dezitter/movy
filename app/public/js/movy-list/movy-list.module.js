const angular = require('angular');

const MovyListComponent = require('./movy-list.component');
const MovyFilterModule = require('./movy-filter/movy-filter.module');
const MovyListItemModule = require('./movy-list-item/movy-list-item.module');

const movyListModule = angular.module('movyList', [
    MovyFilterModule.name,
    MovyListItemModule.name
]);

movyListModule
    .component('movyList', MovyListComponent);

module.exports = movyListModule;
