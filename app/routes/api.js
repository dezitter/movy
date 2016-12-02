const express = require('express');
const router = express.Router();

const parseSearchResult = require('./util/parse-search-result');

router.get('/movies', (req, res) => {
    const store = req.app.get('store');

    store.find(null)
         .sort({ createdAt: -1 })
         .exec((err, movies) => {
             res.type('json')
                .send(movies);
         });
});

router.post('/movies', (req, res) => {
    const movie = req.body;
    const store = req.app.get('store');

    store.insert(movie, (err, movieDoc) => {
        res.type('json')
           .send(movieDoc);
    });
});

router.get('/movies/search', (req, res) => {
    const tmdb = req.app.get('tmdb');
    const tmdbConfig = req.app.get('tmdb.config');
    const text = req.query.text;

    tmdb.searchMovie(text)
        .then(response => {
            const movies = parseResponse(response);

            res.type('json')
               .send(movies);
        });

    function parseResponse(response) {
        return response.results.map(movie => {
            return parseSearchResult(movie, tmdbConfig);
        });
    }
});

module.exports = router;
