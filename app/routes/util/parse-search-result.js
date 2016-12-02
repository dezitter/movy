const buildPosterUrl = require('./build-poster-path');

function parseSearchResult(result, config) {
    const { posterBaseUrl, posterSize, smallPosterSize } = config;

    return Object.assign(result, {
        poster_url      : buildPosterUrl(posterBaseUrl, posterSize,      result.poster_path),
        small_poster_url: buildPosterUrl(posterBaseUrl, smallPosterSize, result.poster_path)
    });
}

module.exports = parseSearchResult;
