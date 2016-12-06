const template = require('./movy-list.template.pug');

function MovyListController(Store) {
    const vm = this;

    vm.store = Store;
    vm.onRemove = onRemove;
    vm.onUpdate = onUpdate;
    vm.nextPage = nextPage;
    vm.previousPage = previousPage;

    function onRemove(movie) {
        Store.removeMovie(movie);
    }

    function onUpdate(movie, patch) {
        Store.updateMovie(movie, patch);
    }

    function nextPage() {
        Store.nextPage();
    }

    function previousPage() {
        Store.previousPage();
    }
}

module.exports = {
    controller: [
        'Store',
        MovyListController
    ],
    template: template()
};
