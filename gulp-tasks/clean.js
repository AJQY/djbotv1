/* Dependencies */
var gulp = require('gulp');
var del = require('del');
var g = require('./global.json');

/* Clean tasks */

//Clean everything
gulp.task('clean', ['clean-npm', 'clean-build', 'clean-typings', 'clean-coverage', 'clean-docs']);

//Clean the node_modules directory
gulp.task('clean-np