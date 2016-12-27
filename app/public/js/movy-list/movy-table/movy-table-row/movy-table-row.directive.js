const template = require('./movy-table-row.template.pug');

function MovyTableRowController(MovieAction) {
    const vm = this;

    vm.onRemove = onRemove;

    function onRemove() {
        MovieAction.removeMovie(vm.movie);
    }
}

module.exports = function MovyTableRowDirectiveFactory() {
    return {
        bindToController: true,
        controller: ['MovieAction', MovyTableRowController],
        controllerAs: '$ctrl',
        scope: {
            movie: '='
        },
        template: template()
    };
};
