
/* Dependencies */
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var ngHtml2Js = require('gulp-ng-html2js');
var plumber = require('gulp-plumber');
var json = require('gulp-json-concat');
var transform = require('vinyl-transform');
var source = require('vinyl-source-stream');
var g = require('./global.json');


//Prepend the NPM directory to all passed-in files
function prependNPM(fileNames) {
  return fileNames.map(function (fileName) {
    return g.NPM + fileName
  });
}


//Concat everything down
gulp.task('concat', ['concat-json', 'concat-vendor-js', 'concat-vendor-css', 'ts', 'concat-app-css', 'concat-app-html', 'copy-index']);

//Bundle vendor JS files
gulp.task('concat-vendor-js', function () {
  var vendorFiles = [
    'lodash/lodash.js',
    'highstock-release/highstock.js',
    'jquery/dist/jquery.js',
    'he/he.js',
    'moment/moment.js',
    'angular/angular.js',
    'angular-animate/angular-animate.js',
    'angular-aria/angular-aria.js',
    'angular-material/angular-material.js',
    'angular-material-icons/angular-material-icons.js',
    'angular-messages/angular-messages.js',
    'angular-mocks/angular-mocks.js',
    'angular-ui-router/release/angular-ui-router.js',
    'angularfire/dist/angularfire.js',
    'highstock-release/modules/boost.src.js' 
  ];
  
  return gulp
    .src(prependNPM(vendorFiles))
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest(g.BUILD));
});

//Concatenate vendor CSS into one file
gulp.task('concat-vendor-css', function () {
  var vendorFiles = [
    'angular-material/angular-material.css',
    'angular-material-icons/angular-material-icons.css'
  ];

  return gulp
    .src(prependNPM(vendorFiles))
    .pipe(concat('vendors.css'))
    .pipe(gulp.dest(g.BUILD));
});

//Run less conversion and then concat into one file
gulp.task('concat-app-css', function () {
  return gulp
    .src(g.SRC + '**/*.less')
    .pipe(plumber({ errorHandler: true }))
    .pipe(less())
    .pipe(concat('app.css'))
    .pipe(gulp.dest(g.BUILD));
});

//Convert HTML -> Javascript and then concat into one file
gulp.task('concat-app-html', function () {
  return gulp
    .src(g.SRC + '**/*.html')
    .pipe(ngHtml2Js({
      moduleName: 'RealTimeTrade.Templates'
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(g.BUILD));
});

//Concat json files into a dictionary file
gulp.task('concat-json', function () {
  return gulp
    .src(g.SRC + '**/*.json')
    .pipe(json('json.js', function (data) {
      return new Buffer(JSON.stringify(data));
    }))
    .pipe(gulp.dest(g.BUILD));