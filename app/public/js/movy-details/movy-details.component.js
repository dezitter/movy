const template = require('./movy-details.template.pug');

function MovyDetailsController() {
    const vm = this;

    vm.formatGenres = formatGenres;

    function formatGenres() {
        return vm.movie.genres.map(function(genre) {
            return genre.name;
        })
        .join(', ');
    }
}

module.exports = {
    controller: [
        MovyDetailsController
    ],
    bindings: {
        movie: '<movyMovie'
    },
    template: template()
};
