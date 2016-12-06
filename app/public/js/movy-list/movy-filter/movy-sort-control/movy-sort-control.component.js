const template = require('./movy-sort-control.template.pug');

function MovyFilterSortControlController() {
}

module.exports = {
    controller: [
        'Store',
        MovyFilterSortControlController
    ],
    bindings: {
        filter: '<movyFilter'
    },
    template: template()
};
