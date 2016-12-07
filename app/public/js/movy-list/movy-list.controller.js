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
        var filteredMovies;
        const movies = $scope.store.getMovies();
        const { title, starred, watched } = $scope.store.filter;

        filteredMovies = byTitle(movies, { title });
        filteredMovies = byFlag(filteredMovies, 'starred', starred);
        filteredMovies = byFlag(filteredMovies, 'watched', watched);

        $scope.movies = filteredMovies;
    }

    function byTitle(movies, predicate) {
        return $filter('filter')(movies, predicate);
    }

    function byFlag(movies, name, flag) {
        return $filter('filter')(movies, predicate);

        function predicate(movie) {
            if (!flag) {
                return true;
            }

            return movie[name] === flag;
        }
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
