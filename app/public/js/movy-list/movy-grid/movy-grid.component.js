const template = require('./movy-grid.template.pug');

function MovyGridController() {
}

module.exports = {
    controller: [
        MovyGridController
    ],
    bindings: {
        filter: '<movyFilter',
        movies: '<movyMovies',
        pager: '<movyPager'
    },
    template: template()
};
