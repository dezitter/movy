const angular = require('angular');

const MovyPagerComponent = require('./movy-pager.component');

const movyPagerModule = angular.module('movyPager', [
]);

movyPagerModule
    .component('movyPager', MovyPagerComponent);

module.exports = movyPagerModule;
