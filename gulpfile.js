const gulp = require('gulp');
const image = require('gulp-image');
 
gulp.task('image', function () {
  gulp.src('./src/assets/images/*')
    .pipe(image())
    .pipe(gulp.dest('./src/assets/images/dest'));
});
