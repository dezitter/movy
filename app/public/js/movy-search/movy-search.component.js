const template = require('./movy-search.template.pug');

function MovySearchController(Movie) {
    const vm = this;

    vm.loading = false;
    vm.results = [];
    vm.onClear = onClear;
    vm.onSubmit = onSubmit;

    function onClear() {
        updateScope({ results: [], loading: false });
    }

    function onSubmit(text) {
        updateScope({ results: [], loading: true });

        searchMovie(text)
            .then(movies => updateScope({ results: movies, loading: false }));
    }

    function updateScope(patch) {
        vm.loading = patch.loading;
        vm.results = patch.results;
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
