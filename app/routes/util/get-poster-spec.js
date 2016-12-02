const buildPosterUrl = require('./build-poster-path');

function getPosterSpec(posterPath, config) {
    const { posterBaseUrl, posterSize, smallPosterSize } = config;

    return {
        poster_url      : buildPosterUrl(posterBaseUrl, posterSize,      posterPath),
        small_poster_url: buildPosterUrl(posterBaseUrl, smallPosterSize, posterPath)
    };
}

module.exports = getPosterSpec;
