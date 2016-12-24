function MovieActionFactory(Store, Movie) {

    function handleError(error) {
        console.error(error.data.error);
    }

    class MovieAction {

        constructor() {
            this.fetched = false;
        }

        saveMovie(movie) {
            return Movie.save(movie).$promise
                .then(movie => Store.addMovie(movie))
                .catch(handleError);
        }

        getMovie(_id) {
            return new Promise(executor)
                .catch(onReject)
                .catch(handleError);

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
                .then(newMovie => Store.updateMovie(movie, newMovie))
                .catch(handleError);
        }

        fetchMovies() {
            if (this.fetched) {
                return new Promise(resolve => resolve( Store.getMovies() ));
            }

            return Movie.query().$promise
                .then(onResolve.bind(this))
                .catch(handleError);

            function onResolve(movies) {
                this.fetched = true;
                Store.resetMovies(movies);
                return movies;
            }
        }

        removeMovie(movie) {
            const _id = movie._id;

            return Movie.remove({ _id }).$promise
                .then(() => Store.removeMovie(movie))
                .catch(handleError);
        }
    }

    return new MovieAction();
}

module.exports = [
    'Store',
    'Movie',
    MovieActionFactory
];
