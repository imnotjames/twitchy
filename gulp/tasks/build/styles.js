var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');

var config = require('../../config').styles;

gulp.task(
	'build:styles',
	[ 'clean' ],
	function () {
		return gulp.src([ config.src + '/*.scss', '!' + config.src + '/**/_*.scss' ])
			.pipe(plumber())
			// .pipe(sourcemaps.init())
			.pipe(sass())
			// .pipe(sourcemaps.write(config.dest))
			.pipe(plumber.stop())
			.pipe(gulp.dest(config.dest));
	}
);
