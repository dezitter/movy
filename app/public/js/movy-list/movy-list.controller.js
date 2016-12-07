function MovyListController($scope, $filter, Store, MovieAction, PagerAction) {
    $scope.movies = [];
    $scope.store = Store;

    activate();

    function activate() {
        MovieAction.fetchMovies();

        $scope.$watch('store.filter', onChange, true);
        $scope.$watchCollection('store.movies', onChange);
    }

    function onChange() {
        filterMovies();
        PagerAction.updatePager({ total: getTotalpage() });
    }

    function filterMovies() {
        const movies = $scope.store.getMovies();
        const filter = $scope.store.filter;

        $scope.movies = byTitle(movies, { title: filter.title });
    }

    function byTitle(movies, predicate) {
        return $filter('filter')(movies, predicate);
    }

    function getTotalpage() {
        return Math.ceil($scope.movies.length / $scope.store.pager.limit);
    }

}

module.exports = [
    '$scope',
    '$filter',
    'Store',
    'MovieAction',
    'PagerAction',
    MovyListController
];
