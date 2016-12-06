function MovieActionFactory(Store, Movie) {

    class  MovieAction {

        saveMovie(movie) {
            return Movie.save(movie).$promise
                .then(onSave);

            function onSave(movie) {
                Store.movies.unshift(movie);
            }
        }

        updateMovie(movie, patch) {
            return Movie.update({ _id: movie._id }, patch).$promise
                .then(onUpdate);

            function onUpdate(newMovie) {
                const index = Store.movies.indexOf(movie);

                if (index >= 0) {
                    Store.movies[index] = newMovie;
                }
            }
        }

        fetchMovies() {
            return Movie.query().$promise
                .then(onFetch);

            function onFetch(movies) {
                Store.movies = movies;
                Store.updatePager();
            }
        }

        removeMovie(movie) {
            return Movie.remove({ _id: movie._id }).$promise
                .then(onRemove);

            function onRemove() {
                const index = Store.movies.indexOf(movie);

                if (index >= 0) {
                    Store.movies.splice(index, 1);
                }
            }
        }
    }

    return new MovieAction();
}

module.exports = [
    'Store',
    'Movie',
    MovieActionFactory
];
