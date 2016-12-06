const template = require('./movy-list.template.pug');

function MovyListController(Store) {
    const vm = this;

    vm.store = Store;
    vm.onRemove = onRemove;
    vm.onUpdate = onUpdate;

    function onRemove(movie) {
        Store.removeMovie(movie);
    }

    function onUpdate(movie, patch) {
        Store.updateMovie(movie, patch);
    }
}

module.exports = {
    controller: [
        'Store',
        MovyListController
    ],
    template: template()
};
