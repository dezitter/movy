const debug = require('debug')('movy');
const dotenv = require('dotenv');

dotenv.config();

const app = require('./app');
const APP_PORT = process.env.APP_PORT;

app.listen(APP_PORT, () => {
    debug(`Listening on port ${APP_PORT}`);
});
