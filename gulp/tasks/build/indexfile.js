var gulp = require('gulp');

var config = require('../../config');

gulp.task(
	'build:indexfile',
	[ 'clean' ],
	function() {
		return gulp.src(config.src + '/index.html')
			.pipe(gulp.dest(config.dest));
	}
);
