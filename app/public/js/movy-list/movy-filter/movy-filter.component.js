const template = require('./movy-filter.template.pug');

function MovyFilterController(Store) {
    const vm = this;

    vm.store = Store;
    vm.clear = clear;

    function clear() {
        vm.store.filter.title = '';
    }
}

module.exports = {
    controller: [
        'Store',
        MovyFilterController
    ],
    template: template()
};
