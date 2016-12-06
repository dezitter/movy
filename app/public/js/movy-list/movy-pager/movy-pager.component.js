const template = require('./movy-pager.template.pug');

function MovyPagerController() {
}

module.exports = {
    controller: [
        MovyPagerController
    ],
    bindings: {
        'state': '<movyPagerState',
        'nextPage': '&movyNextPage',
        'previousPage': '&movyPreviousPage'
    },
    template: template()
};
