const debug = require('debug')('movy');
const app = require('./app');

const APP_PORT = 3000;

app.listen(APP_PORT, () => {
    debug(`Listening on port ${APP_PORT}`);
});
