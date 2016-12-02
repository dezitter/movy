const buildPosterUrl = require('./build-poster-path');

function getPosterSpec(posterPath, config) {
    var posterBaseUrl = config.posterBaseUrl;
    const { posterSize, smallPosterSize } = config;

    if (!posterPath) {
        posterPath = config.defaultPoster;
        posterBaseUrl = config.localPosterBaseUrl;
    }

    return {
        poster_url      : buildPosterUrl(posterBaseUrl, posterSize,      posterPath),
        small_poster_url: buildPosterUrl(posterBaseUrl, smallPosterSize, posterPath)
    };
}

module.exports = getPosterSpec;
