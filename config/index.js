const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    movy: {
        pager: {
            limit: 10
        }
    },
    store: require('./store'),
    tmdb: require('./tmdb')
};
