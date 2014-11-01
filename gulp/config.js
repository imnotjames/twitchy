var src = './src';
var dest = './dist';

module.exports = {
	webserver: {
		root: dest,
		host: '0.0.0.0',
		port: 8888
	},

	src: src,
	dest: dest,

	partials: {
		src: src + '/partials',
		dest: dest + '/partials'
	},

	scripts: {
		src: src + '/scripts',
		dest: dest + '/js'
	},

	styles: {
		src: src + '/styles',
		dest: dest + '/css/'
	},

	browserify: {

	}
};
