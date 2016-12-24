const angular = require('angular');

function JoinFilterFactory() {
    return function joinFilter(collection, expression, separator=', ') {
        if (angular.isArray(collection)) {
            return collection.map(item => item[expression])
                             .join(separator);
        }
    };
}

module.exports = JoinFilterFactory;
