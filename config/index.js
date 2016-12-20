const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    movy: {
        pager: {
            limit: 15
        }
    },
    movieStore: require('./movie-store'),
    tmdb: require('./tmdb')
};
