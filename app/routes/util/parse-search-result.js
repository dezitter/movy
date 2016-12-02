const getPosterSpec = require('./get-poster-spec');

function parseSearchResult(result, config) {
    const posterSpec = getPosterSpec(result.poster_path, config);

    return Object.assign(result, posterSpec);
}

module.exports = parseSearchResult;
