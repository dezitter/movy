const browserify = require('browserify');
const gulp = require('gulp');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const watchify = require('watchify');

gulp.task('watch:js', () => {
    const b = createBundle({
        cache: {},
        packageCache: {},
        plugin: [watchify]
    });

    b.on('update', () => writeBundle(b));
    b.on('log',    (msg) => gutil.log(msg));

    writeBundle(b);

    function createBundle(options) {
        return browserify('./app/public/index.js', options);
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
