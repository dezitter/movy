const template = require('./movy-filter.template.pug');

function MovyFilterController(FilterAction) {
    const vm = this;

    vm.clear = clear;

    function clear() {
        FilterAction.clear();
    }
}

module.exports = {
    controller: [
        'FilterAction',
        MovyFilterController
    ],
    bindings: {
        filter: '<movyFilter'
    },
    template: template()
};
