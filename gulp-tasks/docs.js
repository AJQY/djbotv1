var gulp = require('gulp');
var ngDocs = require('gulp-ngdocs');
var g = require('./global.json');

gulp.task('docs', ['concat'], function () {
  return gulp.src(g.SRC + '**/*.js')
    .pipe(ngDocs.process({
      loadDefaults: {
 