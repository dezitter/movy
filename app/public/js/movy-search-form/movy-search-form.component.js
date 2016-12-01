const template = require('./movy-search-form.template.pug');

function MovySearchFormController(Movie) {
    const vm = this;

    vm.onSubmit = onSubmit;

    function onSubmit() {
        searchMovie();
    }

    function searchMovie(text) {
        return Movie.search({ query: text }).$promise;
    }
}

module.exports = {
    controller: [
        'Movie',
        MovySearchFormController
    ],
    template: template()
};
