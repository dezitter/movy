const template = require('./movy-table.template.pug');

function MovyTableController() {
}

module.exports = {
    controller: [
        MovyTableController
    ],
    bindings: {
        allMovies: '<movyAllMovies',
        filter: '<movyFilter',
        movies: '<movyMovies',
        pager: '<movyPager'
    },
    template: template()
};
