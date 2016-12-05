const template = require('./movy-pager.template.pug');

function MovyPagerController(Store) {
    const vm = this;

    vm.store = Store;
}

module.exports = {
    controller: [
        'Store',
        MovyPagerController
    ],
    template: template()
};
