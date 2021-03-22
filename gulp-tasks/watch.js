var gulp = require('gulp');
var g = require('./global.json');

gulp.task('watch', function () {
	gulp.watch(g.SRC + '**/*.html', ['concat-app-html']);
	gulp.watch(g.SRC + '**/*.ts', ['ts']);
	gulp.watch(g.SRC + '**/*.less', ['concat-app-css']);
	gulp.watch(g.SRC + 'index.html', ['copy-index']);
});