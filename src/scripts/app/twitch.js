var angular = require('angular');

module.exports = angular.module('twitch-api', ['ng'])
	.service(
		'$twitch',
		[
			'$http',
			function ($http) {
				var twitchURL = function() {
					var parts = Array.prototype.map.call(
						arguments,
						function(a) {
							return encodeURIComponent(a);
						}
					).join('/');

					return 'https://api.twitch.tv/kraken/' +
						parts +
						'?callback=JSON_CALLBACK';
				};

				this.user = function(username) {
					return $http.jsonp(
						twitchURL(
							'users',
							username
						)
					);
				};

				this.channel = function(channel) {
					return $http.jsonp(
						twitchURL(
							'channels',
							channel
						)
					);
				};

				this.stream = function(channel) {
					return $http.jsonp(
						twitchURL(
							'streams',
							channel
						)
					);
				};
			}
		]
	);
