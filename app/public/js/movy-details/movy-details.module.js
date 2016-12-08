const angular = require('angular');

const MovyDetailsComponent = require('./movy-details.component');

const movyDetailsModule = angular.module('movyDetails', [
]);

movyDetailsModule
    .component('movyDetails', MovyDetailsComponent);

module.exports = movyDetailsModule;
