function MovyDetailsController($scope, $routeParams, MovieAction) {
    activate();

    function activate() {
        MovieAction.getMovie($routeParams._id)
            .then(onResolve);

        function onResolve(movie) {
            $scope.$apply(() => $scope.movie = movie);
        }
    }
}

module.exports = [
    '$scope',
    '$routeParams',
    'MovieAction',
    MovyDetailsController
];
