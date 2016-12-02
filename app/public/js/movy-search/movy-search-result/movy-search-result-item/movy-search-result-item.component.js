const template = require('./movy-search-result-item.template.pug');

function MovySearchResultItemController(Store) {
    const vm = this;

    vm.onAdd = onAdd;

    function onAdd() {
        Store.saveMovie(vm.movie);
    }
}

module.exports = {
    controller: [
        'Store',
        MovySearchResultItemController
    ],
    bindings: {
        movie: '='
    },
    template: template()
};
