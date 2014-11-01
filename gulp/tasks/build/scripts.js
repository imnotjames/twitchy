var gulp = require('gulp');
var plumber = require('gulp-plumber');
var gulpBrowserify = require('gulp-browserify');

var config = require('../../config').scripts;

gulp.task(
	'build:scripts',
	[ 'clean' ],
	function() {
		gulp.src([ config.src + '/*.js', '!' + config.src + '/**/_*.js' ])
			.pipe(plumber())
			.pipe(gulpBrowserify({ insertGlobals: true }))
			.pipe(plumber.stop())
			.pipe(gulp.dest(config.dest + '/'));
	}
);
