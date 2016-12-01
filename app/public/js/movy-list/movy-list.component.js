const template = require('./movy-list.template.pug');

function MovyListController(Store) {
    const vm = this;

    vm.store = Store;
}

module.exports = {
    controller: [
        'Store',
        MovyListController
    ],
    template: template()
};
