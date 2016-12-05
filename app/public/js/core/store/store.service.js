function StoreFactory(Movie) {

    class Store {

        constructor() {
            this.movies = [];
            this.filter = {
                order: {
                    property: '-createdAt',
                    reverse: false
                }
            };
            this.fetchMovies();
        }

        saveMovie(movie) {
            return Movie.save(movie).$promise
                .then(movie => this.movies.unshift(movie));
        }

        updateMovie(movie, patch) {
            return Movie.update({ _id: movie._id }, patch).$promise
                .then(onUpdate.bind(this));

            function onUpdate(newMovie) {
                const index = this.movies.indexOf(movie);

                if (index >= 0) {
                    this.movies[index] = newMovie;
                }
            }
        }

        removeMovie(movie) {
            return Movie.remove({ _id: movie._id }).$promise
                .then(onRemove.bind(this));

            function onRemove() {
                const index = this.movies.indexOf(movie);

                if (index >= 0) {
                    this.movies.splice(index, 1);
                }
            }
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
