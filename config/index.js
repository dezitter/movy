const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    movy: {
        pager: {
            limit: 15
        }
    },
    store: require('./store'),
    tmdb: require('./tmdb')
};
