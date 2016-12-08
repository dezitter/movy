const template = require('./movy-details.template.pug');

function MovyDetailsController() {
}

module.exports = {
    controller: [
        MovyDetailsController
    ],
    bindings: {
        movie: '<movyMovie'
    },
    template: template()
};
