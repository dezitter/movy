const dotenv = require('dotenv');
const url = require('url');

dotenv.config();

const appUri = url.format({
    hostname: process.env.APP_HOSTNAME,
    port: process.env.APP_PORT,
    protocol: process.env.APP_PROTOCOL
});

module.exports = {
    'files': [
        'app/**/*.pug',
        'dist/js/bundle.js',
        'dist/css/login.css',
        'dist/css/main.css',
        'dist/css/signup.css'
    ],
    'online': false,
    'proxy': appUri,
    'logLevel': 'info',
    'browser': 'google-chrome-stable',
    'notify': true
};
