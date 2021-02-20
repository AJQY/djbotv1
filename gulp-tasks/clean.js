/* Dependencies */
var gulp = require('gulp');
var del = require('del');
var g = require('./global.json');

/* Clean tasks */

//Clean everything
gulp.task('clean', ['clean-npm', 'clean-build', 'clean-typings',