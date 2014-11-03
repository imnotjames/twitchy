var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

var exec = require('child_process').exec;

var config = require('../config');

gulp.task(
	'deploy',
	[ 'build' ],
	function() {
		return gulp.src([ config.dest + '/*', config.dest + '/**/*' ])
			.pipe(deploy());
	}
);
