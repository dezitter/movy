const angular = require('angular');

const MovyListController = require('./movy-list.controller');
const MovyFilterModule = require('./movy-filter/movy-filter.module');
const MovyGridModule = require('./movy-grid/movy-grid.module');
const MovyPagerModule = require('./movy-pager/movy-pager.module');

const movyListModule = angular.module('movyList', [
    MovyFilterModule.name,
    MovyGridModule.name,
    MovyPagerModule.name
]);

movyListModule
    .controller('movyList', MovyListController);

module.exports = movyListModule;
