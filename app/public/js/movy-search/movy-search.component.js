const template = require('./movy-search.template.pug');

function MovySearchController(Movie) {
    const vm = this;

    vm.results = [];
    vm.onSubmit = onSubmit;

    function onSubmit(text) {
        searchMovie(text)
            .then(movies => vm.results = movies);
    }

    function searchMovie(text) {
        return Movie.search({ text }).$promise;
    }
}

module.exports = {
    controller: [
        'Movie',
        MovySearchController
    ],
    template: template()
};
