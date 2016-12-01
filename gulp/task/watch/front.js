const gulp = require('gulp');
const browserSync = require('browser-sync');

const config = require('../../../bs-config');

gulp.task('watch:front', () => {
    browserSync(config);
});
