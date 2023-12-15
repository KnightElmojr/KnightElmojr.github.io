const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

gulp.task('styles', () => {
  return gulp.src(['assets/variables/*.scss', 'src/css/**/*.scss'])
    .pipe(concat('all.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', () => {
  gulp.watch(['src/css/**/*.scss'], gulp.series('styles'));
});

gulp.task('default', gulp.series('styles', 'watch'));