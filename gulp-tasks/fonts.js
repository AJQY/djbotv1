var gulp = require('gulp');
var googleWebFonts = require('gulp-google-webfonts');
var g = require('./global.json');

gulp.task('fonts', function () {
  return gulp
    .src('./fonts.list')
    .pipe(googleWebFonts({}))
    .pipe(gulp.dest(g.BUILD));
});