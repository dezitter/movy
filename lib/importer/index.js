const config = require('../../config');

const listDirectory = require('./list-directory');
const parseFilename = require('./parse-filename');
const parseSearchResult = require('../tmdb/parse-search-result');

function isSample(filename) {
    return /sample/i.test(filename);
}

function hasTitle(info) {
    return info.title.length > 0;
}

function parseResponse(response) {
    const body = JSON.parse(response.body);
    body.results = body.results.map(result => {
        return parseSearchResult(result, config.tmdb);
    });
    return body;
}

class Importer {

    constructor(options) {
        this.logger = options.logger;
        this.store = options.store;
        this.tmdb = options.tmdb;

        this.failures = [];
        this.successes = [];
    }

    run(root) {
        const that = this;

        const filenames = listDirectory(root);
        const infos = filenames
            .filter(filename => !isSample(filename))
            .map(parseFilename)
            .filter(hasTitle);

        const promises = infos.map(this.fetchMovie.bind(this));

        return new Promise(executor);

        function executor(resolve) {
            let count = 0;
            const total = promises.length;

            promises.forEach(function(promise) {
                promise.then(onSettle)
                       .catch(onSettle);
            });

            function onSettle() {
                count = count + 1;
                if (count === total) {
                    resolve({
                        failures: that.failures,
                        successes: that.successes
                    });
                }
            }
        }
    }

    fetchMovie(info) {
        const that = this;
        const { title, year } = info;

        return this.tmdb.searchMovie(title, { year })
            .then(parseResponse)
            .then(onResolve)
            .catch(onReject);

        function onResolve(response) {
            const total = response.total_results;

            if (total === 1) {
                return that.addInStore(response.results[0])
                    .then(response => {
                        that.reportSuccess(response.reason, response.doc.title);
                        return response.doc;
                    });

            } else if (total === 0) {
                throw new Error(`Nothing found for "${title}"`);
            } else {
                throw new Error(`Found ${total} candidates for "${title}"`);
            }
        }

        function onReject(error) {
            that.reportFailure(error, title);
            throw error;
        }
    }


    addInStore(result) {
        const that = this;

        return new Promise(executor);

        function executor(resolve, reject) {
            that.store.findOne({ id: result.id }, onFindOne);

            function onFindOne(error, doc) {
                if (error) return reject(error);

                if (!doc) {
                    that.store.insert(result, onInsert);
                } else {
                    resolve({ doc, reason: 'Already in store' });
                }
            }

            function onInsert(error, doc) {
                if (error) return reject(error);
                resolve({ doc, reason: 'Inserted in store' });
            }
        }

    }

    reportSuccess(reason, title) {
        this.logger.success(`"${title}": ${reason}`);
        this.successes.push({ reason, title });
    }

    reportFailure(error, title) {
        this.logger.error(error);
        this.failures.push({ error, title });
    }
}

module.exports = Importer;
