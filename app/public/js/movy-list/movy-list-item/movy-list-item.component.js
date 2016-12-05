const template = require('./movy-list-item.template.pug');

function MovyListItemController() {
}

module.exports = {
    controller: [
        MovyListItemController
    ],
    bindings: {
        movie: '=',
        onRemove: '&',
        onUpdate: '&'
    },
    template: template()
};
