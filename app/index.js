const express = require('express');
const path = require('path');

const index = require('./routes/index');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(index);

module.exports = app;