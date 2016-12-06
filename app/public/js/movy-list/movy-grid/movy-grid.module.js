const angular = require('angular');

const MovyGridComponent = require('./movy-grid.component');
const MovyListItemModule = require('../movy-list-item/movy-list-item.module');

const movyGridModule = angular.module('movyGrid', [
    MovyListItemModule.name,
]);

movyGridModule
    .component('movyGrid', MovyGridComponent);

module.exports = movyGridModule;
