const template = require('./movy-search-result-item.template.pug');

function MovySearchResultItemController(MovieAction) {
    const vm = this;

    vm.onAdd = onAdd;

    function onAdd() {
        MovieAction.saveMovie(vm.movie);
    }
}

module.exports = {
    controller: [
        'MovieAction',
        MovySearchResultItemController
    ],
    bindings: {
        movie: '='
    },
    template: template()
};
