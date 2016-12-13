const babel = require('gulp-babel');
const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const createBundle = require('../../utils/browserify').createBundle;
const writeBundle = require('../../utils/browserify').writeBundle;

gulp.task('build:js', () => {
    const b = createBundle();
    return writeBundle(b);
});

gulp.task('min:js', ['build:js'], () => {
    return gulp.src('./dist/js/bundle.js')
               .pipe(babel({ presets: ['es2015'] }))
               .pipe(uglify())
               .pipe(rename({ extname: '.min.js' }))
               .pipe(gulp.dest('./dist/js'));
});
