const template = require('./movy-search-form.template.pug');

function MovySearchFormController() {
}

module.exports = {
    controller: [
        MovySearchFormController
    ],
    bindings: {
        onSubmit: '&'
    },
    template: template()
};
