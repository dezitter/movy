const template = require('./movy-pager.template.pug');

function MovyPagerController(PagerAction) {
    const vm = this;

    vm.nextPage = nextPage;
    vm.previousPage = previousPage;

    function nextPage() {
        PagerAction.nextPage();
    }

    function previousPage() {
        PagerAction.previousPage();
    }
}

module.exports = {
    controller: [
        'PagerAction',
        MovyPagerController
    ],
    bindings: {
        'state': '<movyPagerState'
    },
    template: template()
};
