var gulp = require('gulp');
var webserver = require('gulp-webserver');

var config = require('../config');

gulp.task(
	'webserver',
	function() {
		gulp.src(config.webserver.root)
			.pipe(
				webserver({
					host: config.webserver.host,
					port: config.webserver.port,

					livereload: true,
					directoryListing: false
				})
			);
	}
);
