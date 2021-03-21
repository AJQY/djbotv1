var gulp = require('gulp');
var g = require('./global.json');

gulp.task('watch', function () {
	gulp.watch(g.SRC + '**/*.html', ['concat-app-html']);
	gulp.watc