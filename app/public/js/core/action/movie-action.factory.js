function MovieActionFactory(Store, Movie) {

    class MovieAction {

        saveMovie(movie) {
            return Movie.save(movie).$promise
                .then(movie => Store.addMovie(movie));
        }

        updateMovie(movie, patch) {
            const _id = movie._id;

            return Movie.update({ _id }, patch).$promise
                .then(newMovie => Store.updateMovie(movie, newMovie));
        }

        fetchMovies() {
            return Movie.query().$promise
                .then(movies => Store.resetMovies(movies));
        }

        removeMovie(movie) {
            const _id = movie._id;

            return Movie.remove({ _id }).$promise
                .then(() => Store.removeMovie(movie));
        }
    }

    return new MovieAction();
}

module.exports = [
    'Store',
    'Movie',
    MovieActionFactory
];
