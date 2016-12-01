const browserify = require('browserify');
const gulp = require('gulp');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');

gulp.task('build:js', () => {
    const b = createBundle();

    return writeBundle(b);

    function createBundle() {
        return browserify('./app/public/index.js');
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
});
