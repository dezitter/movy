const express = require('express');
const router = express.Router();

const deleteMovie = require('./delete-movie');
const fetchMovies = require('./fetch-movies');
const getMovie = require('./get-movie');
const saveMovie = require('./save-movie');
const searchMovie = require('./search-movie');
const updateMovie = require('./update-movie');

router.get('/movies/search', searchMovie);
router.get('/movies/:_id', getMovie);

router.post('/movies', saveMovie);
router.put('/movies/:_id', updateMovie);
router.get('/movies', fetchMovies);
router.delete('/movies/:_id', deleteMovie);

module.exports = router;
