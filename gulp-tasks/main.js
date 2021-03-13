var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (callback) {
	runSequence('install', 'fonts', 'concat', callback);
});

gulp.task('deploy', fu