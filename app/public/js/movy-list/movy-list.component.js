const template = require('./movy-list.template.pug');

function MovyListController(Movie) {
    const vm = this;

    activate();

    function activate() {
        fetchMovies()
            .then(movies => vm.movies = movies);
    }

    function fetchMovies() {
        return Movie.query().$promise;
    }
}

module.exports = {
    controller: [
        'Movie',
        MovyListController
    ],
    template: template()
};
