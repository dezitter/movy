const angular = require('angular');

const MovyGridComponent = require('./movy-grid.component');
const MovyGridItemModule = require('./movy-grid-item/movy-grid-item.module');

const movyGridModule = angular.module('movyGrid', [
    MovyGridItemModule.name,
]);

movyGridModule
    .component('movyGrid', MovyGridComponent);

module.exports = movyGridModule;
