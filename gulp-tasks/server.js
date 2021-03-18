/* Dependencies */
var gulp = require('gulp');
var gls = require('gulp-live-server');

//Run the server
var server;
gulp.task('server', function () {
    var port = process.env.PORT || 8000;
    server = gls.static('build', port);

    require('connect-livereload')();
    require('../server-scripts/portfolio-updater.js').initialize();

    server.start();
});

//Just host files
gulp.task('host', function () {
    var port = process.env.PORT || 8000;
    server = gls.static('build', port);

    require('connect-livereload')();
    server.start();
});

gulp.task('stop-server', function () {
    if (server) {
        server.stop();
    }
});