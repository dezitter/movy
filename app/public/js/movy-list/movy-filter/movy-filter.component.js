const template = require('./movy-filter.template.pug');

function MovyFilterController() {
    const vm = this;

    vm.clear = clear;

    function clear() {
        vm.filter.title = '';
    }
}

module.exports = {
    controller: [
        MovyFilterController
    ],
    bindings: {
        filter: '<movyFilter'
    },
    template: template()
};
