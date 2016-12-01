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

    $ DEBUG=movy gulp watch:server

Re-bundle the JavaScript app on changes:

    $ gulp watch:js

Reload browser on changes:

    $ ./node_modules/browser-sync/bin/browser-sync.js start -c bs-config.js
