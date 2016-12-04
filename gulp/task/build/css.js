const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('build:css', () => {
    const compiler = sass().on('error', sass.logError);

    return gulp.src('./app/public/sass/main.scss')
        .pipe(compiler)
        .pipe(gulp.dest('./dist/css'));
});
