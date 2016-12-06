const template = require('./movy-grid.template.pug');

function MovyGridController(Store) {
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
        MovyGridController
    ],
    template: template()
};
