const angular = require('angular');

const MovyTableComponent = require('./movy-table.component');
const MovyTableRowModule = require('./movy-table-row/movy-table-row.module');

const movyTableModule = angular.module('movyTable', [
    MovyTableRowModule.name
]);

movyTableModule
    .component('movyTable', MovyTableComponent);

module.exports = movyTableModule;
