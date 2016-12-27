const template = require('./movy-filter.template.pug');

function MovyFilterController(FilterAction, ModeAction) {
    const vm = this;

    vm.clear = clear;
    vm.setMode = setMode;

    function clear() {
        FilterAction.clear();
    }

    function setMode(mode) {
        ModeAction.setMode(mode);
    }
}

module.exports = {
    controller: [
        'FilterAction',
        'ModeAction',
        MovyFilterController
    ],
    bindings: {
        mode: '<movyMode',
        filter: '<movyFilter'
    },
    template: template()
};
