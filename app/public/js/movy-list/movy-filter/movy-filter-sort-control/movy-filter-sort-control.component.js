const template = require('./movy-filter-sort-control.template.pug');

function MovyFilterSortControlController(Store) {
    const vm = this;

    vm.store = Store;
}

module.exports = {
    controller: [
        'Store',
        MovyFilterSortControlController
    ],
    template: template()
};
