const template = require('./movy-list.template.pug');

function MovyListController() {
}

module.exports = {
    controller: [
        MovyListController
    ],
    template: template()
};
