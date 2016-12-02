const Tmdb = require('tmdb-v3');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const api = require('./routes/api');
const index = require('./routes/index');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.set('tmdb', new Tmdb({ apiKey: process.env.TMDB_API_KEY }));
app.set('tmdb.config', {
    posterBaseUrl  : process.env.TMDB_POSTER_BASE_URL,
    posterSize     : process.env.TMDB_POSTER_SIZE,
    smallPosterSize: process.env.TMDB_SMALL_POSTER_SIZE,
    defaultPoster:      process.env.DEFAULT_POSTER,
    localPosterBaseUrl: process.env.LOCAL_POSTER_BASE_URL
});

app.use(bodyParser.json());
app.use(express.static( path.join(__dirname, '..', 'dist') ));
app.use(express.static( path.join(__dirname, 'public') ));

app.use('/api', api);
app.use(index);

module.exports = app;
