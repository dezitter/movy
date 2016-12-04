const gulp = require('gulp');

gulp.task('watch:sass', () => {
    return gulp.watch('./app/public/sass/**/*.scss', ['build:css']);
});
