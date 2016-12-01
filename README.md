# Movy

A simple web-based movie manager.

## Install

    $ git clone https://github.com/dezitter/movy
    $ cd movy/
    $ cp env.example .env
    $ npm install

## Run

    $ cd movy/
    $ npm run start

## Development workflow

Reload the server on changes:

    $ DEBUG=movy nodemon index.js

Re-bundle the JavaScript app on changes:

    $ ./node_modules/watchify/bin/cmd.js -v -o ./dist/js/bundle.js app/public/index.js
