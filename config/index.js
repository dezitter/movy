const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    store: require('./store'),
    tmdb: require('./tmdb')
};
