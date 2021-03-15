var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (callback) {
	runSequence('install', 'fonts', 'concat', callback);
});

gulp.task('deploy', function (callback) {
	runSequence('build', 'server', callback);
});

gulp.task('develop', function (callback) {
  runSequence('concat', 'server', callback);
});

gulp.task('develop-watch', function (callback) {
  runSequence('develop', 'watch', callback);
});

gulp.task('debug', ['docs', 'lint', 'test']);
gulp.task('default', ['server']);