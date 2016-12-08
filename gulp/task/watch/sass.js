const gulp = require('gulp');

gulp.task('watch:sass', ['build:css'], () => {
    return gulp.watch('./app/public/sass/**/*.scss', ['build:css']);
});
