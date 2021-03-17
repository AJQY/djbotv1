/* Dependencies */
var gulp = require('gulp');
var gls = require('gulp-live-server');

//Run the server
var server;
gulp.task('server', function () {
    var port = process.env.PORT || 8000;
    server = gls.static('build', port);

    require('connect-livereload')();
    require('../server-scripts/portfo