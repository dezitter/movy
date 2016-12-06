const angular = require('angular');

const MovyGridItemComponent = require('./movy-grid-item.component');

const movyGridItemModule = angular.module('movyGridItem', [
]);

movyGridItemModule
    .component('movyGridItem', MovyGridItemComponent);

module.exports = movyGridItemModule;
