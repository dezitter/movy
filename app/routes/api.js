const express = require('express');
const router = express.Router();

const parseSearchResult = require('./util/parse-search-result');

router.get('/movies', (req, res) => {
    const store = req.app.get('store');

    store.find(null)
         .sort({ createdAt: -1 })
         .exec((err, movies) => {
             res.send(movies);
         });
});

router.post('/movies', (req, res) => {
    const movie = req.body;
    const store = req.app.get('store');

    store.insert(movie, (err, movieDoc) => {
        res.send(movieDoc);
    });
});

router.put('/movies/:_id', (req, res) => {
    const _id = req.params._id;
    const patch = req.body;
    const store = req.app.get('store');

    store.update({ _id}, { $set: patch }, () => {
        store.findOne({ _id}, (err, movieDoc) => {
            res.send(movieDoc);
        });
    });
});

router.delete('/movies/:_id', (req, res) => {
    const _id = req.params._id;
    const store = req.app.get('store');

    store.remove({ _id }, (err, numRemoved) => {
        res.send({ numRemoved });
    });
});

router.get('/movies/search', (req, res) => {
    const tmdb = req.app.get('tmdb');
    const tmdbConfig = req.app.get('tmdb.config');
    const text = req.query.text;

    tmdb.searchMovie(text)
        .then(response => {
            var movies;

            movies = parseResponse(response);
            movies = movies.sort(compareByPopularity);
            movies = movies.reverse();

            res.send(movies);
        });

    function parseResponse(response) {
        return response.results.map(movie => {
            return parseSearchResult(movie, tmdbConfig);
        });
    }

    function compareByPopularity(movieA, movieB) {
        if (movieA.popularity < movieB.popularity) {
            return -1;
        } else if (movieB.popularity < movieA.popularity) {
            return 1;
        } else {
            return 0;
        }
    }
});

router.get('/movies/:_id', (req, res) => {
    const _id = req.params._id;
    const store = req.app.get('store');

    store.findOne({ _id}, (err, movieDoc) => {
        res.send(movieDoc);
    });
});

module.exports = router;
