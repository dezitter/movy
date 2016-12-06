function StoreFactory() {

    class Store {

        constructor() {
            this.movies = [];
            this.pager = {
                current: 1,
                total: 1,
                limit: 10
            };

            this.resetFilter();
        }

        // {{{ Movie methods

        addMovie(movie) {
            this.movies.unshift(movie);

            this.resetFilter();
            this.updatePager({ current: 1 });
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
                this.updatePager();
            }
        }

        resetMovies(movies) {
            this.movies = movies;
            this.updatePager({ current: 1 });
        }

        // }}}
        // {{{ Filter methods

        clearFilter() {
            this.filter.title = '';
        }

        resetFilter() {
            this.filter = {
                title: '',
                order: {
                    property: '-createdAt',
                    reverse: false
                }
            };
        }

        // }}}
        // {{{ Pager methods

        incCurrentPage() {
            this.pager.current += 1;
        }

        decCurrentPage() {
            this.pager.current -= 1;
        }

        updatePager(patch) {
            const limit = this.pager.limit;
            const n = this.movies.length;
            const total = Math.ceil(n / limit);
            var current = this.pager.current;

            if (total < this.pager.current) {
                current = total;
            }

            Object.assign(this.pager, { current, total }, patch);
        }

        // }}}

    }

    return new Store();
}

module.exports = [
    StoreFactory
];
