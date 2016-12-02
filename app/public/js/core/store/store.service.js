function StoreFactory(Movie) {

    class Store {

        constructor() {
            this.movies = [];
            this.fetchMovies();
        }

        saveMovie(movie) {
            return Movie.save(movie).$promise
                .then(movie => this.movies.unshift(movie));
        }

        fetchMovies() {
            return Movie.query().$promise
                .then(movies => this.movies = movies);
        }
    }

    return new Store();
}

module.exports = [
    'Movie',
    StoreFactory
];
