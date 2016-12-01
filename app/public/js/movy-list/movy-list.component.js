const template = require('./movy-list.template.pug');

function MovyListController() {
    const vm = this;

    vm.movies = [
        { title: 'foo' },
        { title: 'bar' },
        { title: 'quz' }
    ];
}

module.exports = {
    controller: [
        MovyListController
    ],
    template: template()
};
