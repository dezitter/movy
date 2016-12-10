const debug = require('debug')('movy');

require('./config');

const app = require('./app');
const APP_PORT = process.env.APP_PORT;

app.listen(APP_PORT, () => {
    debug(`Listening on port ${APP_PORT}`);
});
