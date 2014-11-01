var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var config = require('../../config').styles;

gulp.task(
	'build:styles',
	[ 'clean' ],
	function () {
		gulp.src([ config.src + '/*.scss', '!' + config.src + '/**/_*.scss' ])
			// .pipe(sourcemaps.init())
			.pipe(sass())
			// .pipe(sourcemaps.write(config.dest))
			.pipe(gulp.dest(config.dest));
	}
);
