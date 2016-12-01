const template = require('./movy-list.template.pug');

function MovyListController($http) {
    const vm = this;

    activate();

    function activate() {
        $http.get('/api/movies')
           .then(response => vm.movies = response.data);
    }
}

module.exports = {
    controller: [
        '$http',
        MovyListController
    ],
    template: template()
};
