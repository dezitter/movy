const template = require('./movy-search.template.pug');

function MovySearchController(Movie) {
    const vm = this;

    vm.loading = false;
    vm.results = [];
    vm.onSubmit = onSubmit;

    function onSubmit(text) {
        vm.loading = true;
        vm.results = [];

        searchMovie(text)
            .then(onResolve);

        function onResolve(movies) {
            vm.loading = false;
            vm.results = movies;
        }
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
