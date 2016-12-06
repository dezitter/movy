function StoreFactory(Movie) {

    class Store {

        constructor() {
            this.movies = [];
            this.filter = {
                title: '',
                order: {
                    property: '-createdAt',
                    reverse: false
                }
            };
            this.pager = {
                current: 1,
                total: 1,
                limit: 10
            };
            this.fetchMovies();
        }

        // {{{ Movie methods

        saveMovie(movie) {
            return Movie.save(movie).$promise
                .then(onSave.bind(this));

            function onSave(movie) {
                this.movies.unshift(movie);
            }
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
                .then(onFetch.bind(this));

            function onFetch(movies) {
                this.movies = movies;
                this.updatePager();
            }
        }

        // }}}
        // {{{ Pager methods

        updatePager() {
            const n = this.movies.length;
            const limit = this.pager.limit;

            this.pager.current = 1;
            this.pager.total = Math.ceil(n / limit);
        }

        nextPage() {
            this.pager.current += 1;
        }

        previousPage() {
            this.pager.current -= 1;
        }

        // }}}

    }

    return new Store();
}

module.exports = [
    'Movie',
    StoreFactory
];
