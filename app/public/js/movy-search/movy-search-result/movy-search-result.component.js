const template = require('./movy-search-result.template.pug');

function MovySearchResultController() {
}

module.exports = {
    controller: [
        MovySearchResultController
    ],
    bindings: {
        loading: '<',
        results: '<'
    },
    template: template()
};
