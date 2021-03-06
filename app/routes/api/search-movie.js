const parseSearchResult = require('../../../lib/tmdb/parse-search-result');

function compareByPopularity(movieA, movieB) {
    if (movieA.popularity < movieB.popularity) {
        return -1;
    } else if (movieB.popularity < movieA.popularity) {
        return 1;
    } else {
        return 0;
    }
}

module.exports = function(req, res, next) {
    const tmdb = req.app.get('tmdb');
    const tmdbConfig = req.app.get('tmdb.config');
    const { text, year } = req.query;

    tmdb.searchMovie(text, { year })
        .then(response => JSON.parse(response.body))
        .then(response => {
            var movies;

            movies = parseResponse(response);
            movies = movies.sort(compareByPopularity);
            movies = movies.reverse();

            res.send(movies);
        })
        .catch(next);

    function parseResponse(response) {
        return response.results.map(movie => {
            return parseSearchResult(movie, tmdbConfig);
        });
    }
};
