function MovieFactory($resource) {
    return $resource('/api/movies');
}

module.exports = [
    '$resource',
    MovieFactory
];
