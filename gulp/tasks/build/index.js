var gulp = require('gulp');

gulp.task(
	'build',
	[
		'build:indexfile',
		'build:partials',
		'build:scripts',
		'build:styles'
	]
);
