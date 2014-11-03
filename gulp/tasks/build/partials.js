var gulp = require('gulp');

var config = require('../../config').partials;

gulp.task(
	'build:partials',
	[ 'clean' ],
	function() {
		return gulp.src(config.src + '/**/*.html')
			.pipe(gulp.dest(config.dest + '/'));
	}
);
