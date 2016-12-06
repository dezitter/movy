function StoreFactory() {

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
        }

        // {{{ Movie methods

        addMovie(movie) {
            this.movies.unshift(movie);
        }

        updateMovie(oldMovie, newMovie) {
            const index = this.movies.indexOf(oldMovie);

            if (index >= 0) {
                this.movies[index] = newMovie;
            }
        }

        removeMovie(movie) {
            const index = this.movies.indexOf(movie);

            if (index >= 0) {
                this.movies.splice(index, 1);
            }
        }

        resetMovies(movies) {
            this.movies = movies;
            this.updatePager();
        }

        // }}}
        // {{{ Filter methods

        clearFilter() {
            this.filter.title = '';
        }

        // }}}
        // {{{ Pager methods

        incCurrentPage() {
            this.pager.current += 1;
        }

        decCurrentPage() {
            this.pager.current -= 1;
        }

        updatePager() {
            const n = this.movies.length;
            const limit = this.pager.limit;

            this.pager.current = 1;
            this.pager.total = Math.ceil(n / limit);
        }

        // }}}

    }

    return new Store();
}

module.exports = [
    StoreFactory
];
