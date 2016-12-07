const angular = require('angular');

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

        // {{{ Getters

        getFilter() { return this.filter; }
        getMovies() { return this.movies; }
        getPager()  { return this.pager;  }

        // }}}

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
            var current = this.pager.current;
            const isTotalNumber = angular.isNumber(patch.total);
            const isCurrentNumber = angular.isNumber(patch.current);

            if (isTotalNumber
            && patch.total <= 0) {
                patch.total = 1;
            }

            if (isCurrentNumber
            && patch.current <= 0) {
                patch.current = 1;
            }

            if (isTotalNumber
            && !isCurrentNumber
            && patch.total < current) {
                current = patch.total;
            }

            Object.assign(this.pager, { current }, patch);
        }

        // }}}

    }

    return new Store();
}

module.exports = [
    StoreFactory
];
