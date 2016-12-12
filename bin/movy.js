#!/usr/bin/env node

const Datastore = require('nedb');
const dotenv = require('dotenv');
const yargs = require('yargs');

dotenv.config();

const Logger = require('../lib/logger');
const Importer = require('../lib/importer');
const TmdbThrottler = require('../lib/tmdb-throttler');
const config = require('../config');

const logger = new Logger();
const store = new Datastore(config.store);
const tmdb = new TmdbThrottler({ apiKey: process.env.TMDB_API_KEY });
const importer = new Importer({ logger, store, tmdb });

const argv = yargs
    .usage('Usage: $0 -d DIRECTORY')
    // TODO import command
    .demand('d')
    .alias('d', 'directory')
    .argv;

importer.run(argv.directory)
    .then(function(result) {
        const { failures, successes } = result;

        logger.info(`${successes.length} items successfully added in store`);
        logger.info(`${failures.length} could not be treated`);
    });
