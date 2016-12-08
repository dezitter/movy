function MovieActionFactory(Store, Movie) {

    class MovieAction {

        saveMovie(movie) {
            return Movie.save(movie).$promise
                .then(movie => Store.addMovie(movie));
        }

        getMovie(_id) {
            return new Promise(executor)
                .catch(onReject);

            function executor(resolve, reject) {
                const movie = Store.getMovie(_id);
                movie ? resolve(movie) : reject();
            }

            function onReject() {
                return Movie.get({ _id }).$promise;
            }
        }

        updateMovie(movie, patch) {
            const _id = movie._id;

            return Movie.update({ _id }, patch).$promise
                .then(newMovie => Store.updateMovie(movie, newMovie));
        }

        fetchMovies() {
            return Movie.query().$promise
                .then(onResolve);

            function onResolve(movies) {
                Store.resetMovies(movies);
                return movies;
            }
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
