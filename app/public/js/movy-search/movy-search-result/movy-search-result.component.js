const template = require('./movy-search-result.template.pug');

function MovySearchResultController() {
}

module.exports = {
    controller: [
        MovySearchResultController
    ],
    bindings: {
        results: '<'
    },
    template: template()
};
