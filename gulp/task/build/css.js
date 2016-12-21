const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('build:css', () => {
    const compiler = sass().on('error', sass.logError);
    const filenames = [
        './app/public/sass/login.scss',
        './app/public/sass/main.scss',
        './app/public/sass/signup.scss'
    ];

    return gulp.src(filenames)
        .pipe(compiler)
        .pipe(gulp.dest('./dist/css'));
});
