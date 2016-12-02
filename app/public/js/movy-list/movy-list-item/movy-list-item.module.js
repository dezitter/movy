const angular = require('angular');

const MovyListItemComponent = require('./movy-list-item.component');

const movyListItemModule = angular.module('movyListItem', [
]);

movyListItemModule
    .component('movyListItem', MovyListItemComponent);

module.exports = movyListItemModule;
