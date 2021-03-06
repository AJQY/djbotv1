var gulp = require('gulp');
var ngDocs = require('gulp-ngdocs');
var g = require('./global.json');

gulp.task('docs', ['concat'], function () {
  return gulp.src(g.SRC + '**/*.js')
    .pipe(ngDocs.process({
      loadDefaults: {
        angular: false,
        marked: true,
        prettify: true,
        angularAnimate: false
      },
      scripts: [
        '../../build/vendors.js',
        '../../build/app.js',
        '../../build/templates.js'
      ]
    }))
    .pipe(gulp.dest('docs'));
});