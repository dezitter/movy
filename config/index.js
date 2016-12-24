const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    movy: {
        pager: {
            limit: 12
        }
    },
    movieStore: require('./movie-store'),
    userStore: require('./user-store'),
    tmdb: require('./tmdb')
};
