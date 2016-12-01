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
    templateUrl: '/js/movy-list/movy-list.template.html'
};
