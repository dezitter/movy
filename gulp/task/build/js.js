const gulp = require('gulp');

const createBundle = require('../../utils/browserify').createBundle;
const writeBundle = require('../../utils/browserify').writeBundle;

gulp.task('build:js', () => {
    const b = createBundle();
    return writeBundle(b);
});
