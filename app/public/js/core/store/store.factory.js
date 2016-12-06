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
        }

        // {{{ Pager methods

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
    'Movie',
    StoreFactory
];
