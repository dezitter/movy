const template = require('./movy-list.template.pug');

function MovyListController(Store, MovieAction) {
    const vm = this;

    vm.store = Store;

    activate();

    function activate() {
        MovieAction.fetchMovies();
    }
}

module.exports = {
    controller: [
        'Store',
        'MovieAction',
        MovyListController
    ],
    template: template()
};
