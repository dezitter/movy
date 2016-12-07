const template = require('./movy-grid.template.pug');

function MovyGridController() {
    const vm = this;

    vm.isFiltering = isFiltering;

    function isFiltering() {
        return vm.filter.starred === true
        ||     vm.filter.watched === true
        ||     vm.filter.title.length > 0;
    }
}

module.exports = {
    controller: [
        MovyGridController
    ],
    bindings: {
        allMovies: '<movyAllMovies',
        filter: '<movyFilter',
        movies: '<movyMovies',
        pager: '<movyPager'
    },
    template: template()
};
