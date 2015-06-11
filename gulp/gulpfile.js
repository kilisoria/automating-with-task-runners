var gulp = require('gulp');
var jshint = require('gulp-jshint');
var paths = {
    scripts: ['gulpfile.js', 'scripts/**/*.js']
};

gulp.task('lint', function () {
    return gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function () {
	gulp.watch(paths.scripts, ['lint']);
});

gulp.task('default', ['watch']);