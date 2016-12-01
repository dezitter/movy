function StoreFactory(Movie) {
    var that = this;

    that.movies = [];

    initialize();

    function initialize() {
        fetchMovies().then(movies => that.movies = movies);
    }

    function fetchMovies() {
        return Movie.query().$promise;
    }
}

module.exports = [
    'Movie',
    StoreFactory
];
