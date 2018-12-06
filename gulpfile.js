const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./wp-content/themes/*/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./wp-content/themes/*/'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./wp-content/themes/*/sass/*.scss', ['sass']);
});