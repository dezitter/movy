# Movy

A simple web-based movie manager.

## Install

    $ git clone https://github.com/dezitter/movy
    $ cd movy/
    $ cp env.example .env
    $ npm install

Set your [TMDb](https://www.themoviedb.org/documentation/api) api key in the `.env` file.

## Run

    $ cd movy/
    $ npm run start

## Development workflow

Reload the server on changes:

    $ DEBUG=movy gulp watch:server

Re-bundle the JavaScript app on changes:

    $ gulp watch:js

Reload browser on bundle/template changes:

    $ gulp watch:front
