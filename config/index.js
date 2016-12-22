const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    movy: {
        pager: {
            limit: 10
        }
    },
    movieStore: require('./movie-store'),
    userStore: require('./user-store'),
    tmdb: require('./tmdb')
};
