const angular = require('angular');

const MovyTableRowDirective = require('./movy-table-row.directive');

const movyTableRowModule = angular.module('movyTableRow', [
]);

movyTableRowModule
    .directive('movyTableRow', MovyTableRowDirective);

module.exports = movyTableRowModule;
