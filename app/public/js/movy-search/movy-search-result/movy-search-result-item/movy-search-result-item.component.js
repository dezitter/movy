const template = require('./movy-search-result-item.template.pug');

function MovySearchResultItemController(Store, MovieAction) {
    const vm = this;

    vm.onAdd = onAdd;
    vm.isInStore = isInStore;

    function onAdd() {
        MovieAction.saveMovie(vm.movie);
    }

    function isInStore() {
        return Store.containsMovie(vm.movie);
    }
}

module.exports = {
    controller: [
        'Store',
        'MovieAction',
        MovySearchResultItemController
    ],
    bindings: {
        movie: '='
    },
    template: template()
};
