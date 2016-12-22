const template = require('./movy-grid.template.pug');

function MovyGridController() {
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
