const Tmdb = require('tmdb-v3');
const express = require('express');
const path = require('path');

const api = require('./routes/api');
const index = require('./routes/index');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.set('tmdb', new Tmdb({ apiKey: process.env.TMDB_API_KEY }));

app.use(express.static( path.join(__dirname, '..', 'dist') ));
app.use(express.static( path.join(__dirname, 'public') ));

app.use('/api', api);
app.use(index);

module.exports = app;
