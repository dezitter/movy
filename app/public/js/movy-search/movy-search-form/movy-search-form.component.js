const template = require('./movy-search-form.template.pug');

function MovySearchFormController() {
    const vm = this;

    vm.clear = clear;

    function clear() {
        vm.text = '';
        vm.onClear();
    }
}

module.exports = {
    controller: [
        MovySearchFormController
    ],
    bindings: {
        onClear: '&',
        onSubmit: '&'
    },
    template: template()
};
