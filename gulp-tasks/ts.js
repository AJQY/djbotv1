var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var g = require('./global.json');

gulp.task('ts', function () {
  return gulp
    .src([
      'typings/main.d.ts',
