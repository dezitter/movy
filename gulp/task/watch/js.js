const gulp = require('gulp');
const gutil = require('gulp-util');
const watchify = require('watchify');

const createBundle = require('../../utils/browserify').createBundle;
const writeBundle = require('../../utils/browserify').writeBundle;

gulp.task('watch:js', () => {
    const b = createBundle({
        cache: {},
        packageCache: {},
        plugin: [watchify]
    });

    b.on('update', () => writeBundle(b));
    b.on('log', (msg) => gutil.log(msg));

    return writeBundle(b);
});
