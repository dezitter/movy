const Datastore = require('nedb');
const Tmdb = require('tmdb-v3');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const compression = require('compression');

const config = require('../config');
const api = require('./routes/api');
const index = require('./routes/index');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.set('tmdb', new Tmdb({ apiKey: process.env.TMDB_API_KEY }));
app.set('tmdb.config', config.tmdb);
app.set('store', new Datastore(config.store));

app.use(compression());
app.use(bodyParser.json());
app.use(express.static( path.join(__dirname, '..', 'dist') ));
app.use(express.static( path.join(__dirname, 'public') ));

app.use('/api', api);
app.use(index);
app.use(errorMiddleware);

module.exports = app;
