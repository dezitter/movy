const template = require('./movy-grid-item.template.pug');

function MovyGridItemController(MovieAction) {
    const vm = this;

    vm.onRemove = onRemove;
    vm.onUpdate = onUpdate;

    function onRemove() {
        MovieAction.removeMovie(vm.movie);
    }

    function onUpdate(patch) {
        MovieAction.updateMovie(vm.movie, patch);
    }
}

module.exports = {
    controller: [
        'MovieAction',
        MovyGridItemController
    ],
    bindings: {
        movie: '='
    },
    template: template()
};
