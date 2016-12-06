const template = require('./movy-grid-item.template.pug');

function MovyGridItemController() {
}

module.exports = {
    controller: [
        MovyGridItemController
    ],
    bindings: {
        movie: '=',
        onRemove: '&',
        onUpdate: '&'
    },
    template: template()
};
