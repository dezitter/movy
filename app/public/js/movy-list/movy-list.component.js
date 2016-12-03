const template = require('./movy-list.template.pug');

function MovyListController(Store) {
    const vm = this;

    vm.store = Store;
    vm.onRemove = onRemove;

    function onRemove(movie) {
        Store.removeMovie(movie);
    }
}

module.exports = {
    controller: [
        'Store',
        MovyListController
    ],
    template: template()
};
