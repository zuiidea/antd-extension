const gulp = require('gulp')
const less = require('gulp-less')

gulp.task('less', function() {
  return gulp
    .src('./src/style/index.less')
    .pipe(
      less({
        javascriptEnabled: true,
      }),
    )
    .pipe(gulp.dest('./lib/style/'))
    .pipe(gulp.dest('./lib/style/'))
})
