
/* Dependencies */
var gulp = require('gulp');
var karma = require('karma');
var protractor = require('gulp-angular-protractor');
var runSequence = require('run-sequence');

gulp.task('test', ['unit-tests', 'e2e-tests']);

gulp.task('unit-tests', function (done) {
  return new karma.Server({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('e2e-tests', function (callback) {
  runSequence('host', 'protractor', 'stop-server', callback);
});

gulp.task('protractor', function () {
  return gulp
    .src(['./e2e-tests/**/*.ts'])
    .pipe(protractor({
      configFile: './protractor.conf.js',
      debug: true
    }))
    .on('error', function (e) { throw e });
});