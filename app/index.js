const Datastore = require('nedb');
const Tmdb = require('tmdb-v3');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const compression = require('compression');
const flash = require('connect-flash');
const passport = require('passport');
const session = require('express-session');
const isAuthenticaed = require('./middlewares/is-authenticated');

const config = require('../config');
const authStrategy = require('./auth');

// routes & middlewares
const signup = require('./routes/signup');
const login = require('./routes/login');
const logout = require('./routes/logout');
const api = require('./routes/api');
const index = require('./routes/index');
const errorMiddleware = require('./middlewares/error');

const app = express();
const userStore = new Datastore(config.userStore);

userStore.ensureIndex({ fieldName: 'username', unique: true }, err => {
    if (err) throw err;
});

// app settings
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.set('tmdb', new Tmdb({ apiKey: process.env.TMDB_API_KEY }));
app.set('tmdb.config', config.tmdb);
app.set('movie.store', new Datastore(config.movieStore));
app.set('user.store', userStore);
app.set('movy.config', config.movy);

passport.use(authStrategy(userStore));

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( path.join(__dirname, '..', 'dist') ));
app.use(express.static( path.join(__dirname, 'public') ));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(signup);
app.use(login);
app.use(logout);
app.use('/api', isAuthenticaed, api);
app.use(index);
app.use(errorMiddleware);

module.exports = app;
