const gulp = require('gulp')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')
const cssFile = require('./src/style/index.json')

gulp.task('css', function() {
  return gulp
    .src(cssFile.map(_ => `../../node_modules/${_}`))
    .pipe(concat('index.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./lib/style/'))
    .pipe(gulp.dest('./lib/style/'))
})
