var gulp = require('gulp');

var config = require('../config');

gulp.task(
	'watch',
	function() {
		return gulp.watch(
			[
				config.src + '/index.html',

				config.partials.src + '/*.html',
				config.partials.src + '/**/*.html',

				config.scripts.src + '/*.js',
				config.scripts.src + '/**/*.js',

				config.styles.src + '/*.scss',
				config.styles.src + '/**/*.scss'
			],
			[ 'build' ]
		);
	}
);
