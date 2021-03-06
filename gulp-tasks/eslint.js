var gulp = require('gulp');
var eslint = require('gulp-eslint');
var g = require('./global.json');

gulp.task('lint', function () {
    return gulp
       