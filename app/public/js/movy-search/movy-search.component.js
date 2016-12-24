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

    function onSubmit(text, year) {
        updateScope({ results: [], loading: true });

        searchMovie({ text, year })
            .then(movies => updateScope({ results: movies, loading: false }));
    }

    function updateScope(patch) {
        vm.loading = patch.loading;
        vm.results = patch.results;
    }

    function searchMovie(options) {
        return Movie.search(options).$promise;
    }
}

module.exports = {
    controller: [
        'Movie',
        MovySearchController
    ],
    template: template()
};
