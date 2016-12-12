const path = require('path');

const properties = {
    codec     : /((?:x|h)[-.]?264)/i,
    quality   : /(blu.?ray|web.?dl|dvd|brrip|bdrip)/i,
    resolution: /((?:480|576|720|1080)p)/i,
    year      : /((?:19|20)[0-9][0-9])/
};

function cleanTitle(title) {
    return title
        .replace(/(director[. ']?s[. ]?cut|dc|extended|unrated)/ig, '')
        .replace(/[. ][. ]*/g, ' ')
        .trim();
}

function parseFilename(filename) {
    const basename = path.basename(filename, '.mkv');

    var info = {};
    var titleStartIndex = 0;
    var titleEndIndex = Infinity;

    Object.keys(properties).forEach(function(key) {
        const regex = properties[key];
        const match = basename.match(regex);

        if (match) {
            info[key] = match[0];
            if (match.index < titleEndIndex) {
                titleEndIndex = match.index;
            }
        }
    });

    info.basename = basename;
    info.title = cleanTitle(
        basename.slice(titleStartIndex, titleEndIndex)
    );

    return info;
}

module.exports = parseFilename;
