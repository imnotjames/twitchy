'use strict';

var angular = require('angular');

var application = angular.module(
	'TwitchyApplication',
	[
		require('angular-route').name,
		require('angular-animate').name,
		require('./app/twitch').name,
		require('./app/controllers').name
	]
);

application.config(
	[
		'$routeProvider',
		function ($routeProvider) {
			require('./app/routes')($routeProvider);
		}
	]
);
