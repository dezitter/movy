const chalk = require('chalk');

function log(level, message) {
    console.log(level, message);
}

class Logger {

    error(err) {
        const level = chalk.red.bold('ERROR');
        log(level, err.message);
    }

    info(msg) {
        const level = chalk.blue.bold('INFO');
        log(level, msg);
    }

    success(msg) {
        const level = chalk.green.bold('SUCCESS');
        log(level, msg);
    }

    warning(msg) {
        const level = chalk.yellow.bold('WARNING');
        log(level, msg);
    }
}

module.exports = Logger;
