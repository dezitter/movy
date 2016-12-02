const template = require('./movy-search-result-item.template.pug');

function MovySearchResultItemController() {
}

module.exports = {
    controller: [
        MovySearchResultItemController
    ],
    bindings: {
        movie: '='
    },
    template: template()
};
