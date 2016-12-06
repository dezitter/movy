const template = require('./movy-list.template.pug');

function MovyListController(Store, MovieAction) {
    const vm = this;

    vm.store = Store;
    vm.nextPage = nextPage;
    vm.previousPage = previousPage;

    activate();

    function activate() {
        MovieAction.fetchMovies();
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
        'MovieAction',
        MovyListController
    ],
    template: template()
};
