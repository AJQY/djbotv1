/* Dependencies */
var gulp = require('gulp');
var install = require('gulp-install');
var g = require('./global.json');

/* Install tasks */
//Install npm (not Typescripts -- those should only be run when using Visual Studio)
gulp.task(