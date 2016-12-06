const template = require('./movy-filter-sort-control.template.pug');

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
