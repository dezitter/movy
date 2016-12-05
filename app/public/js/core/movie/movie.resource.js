function MovieFactory($resource) {
    const baseUrl = '/api/movies/:_id';

    return $resource(baseUrl, null, {
        search: {
            isArray: true,
            url: `${baseUrl}/search`
        },
        update: {
            method: 'PUT'
        }
    });
}

module.exports = [
    '$resource',
    MovieFactory
];
