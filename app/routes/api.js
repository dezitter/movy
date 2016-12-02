const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) => {
    res.type('json')
       .send([
            { title: 'foo' },
            { title: 'bar' },
            { title: 'quz' }
       ]);
});

router.get('/movies/search', (req, res) => {
    const tmdb = req.app.get('tmdb');
    const text = req.query.text;

    tmdb.searchMovie(text)
        .then(response => {
            res.type('json')
               .send(response.results);
        });
});

module.exports = router;
