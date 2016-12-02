const angular = require('angular');

const MovyListComponent = require('./movy-list.component');
const MovyListItemModule = require('./movy-list-item/movy-list-item.module');

const movyListModule = angular.module('movyList', [
    MovyListItemModule.name
]);

movyListModule
    .component('movyList', MovyListComponent);

module.exports = movyListModule;
