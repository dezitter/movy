const browserify = require('browserify');
const gulp = require('gulp');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');

function createBundle(options) {
    return browserify('./app/public/js/index.js', options);
}

function writeBundle(b) {
    return b.bundle()
        .on('error', onBundleError)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/js'));
}

function onBundleError(error) {
    const header = gutil.colors.red.bold('Browserify:');
    const message = gutil.colors.red(error.message);

    gutil.log(header, message);
    gutil.log(error.stack);
}

module.exports = {
    createBundle,
    writeBundle
};
