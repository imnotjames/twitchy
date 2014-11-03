'use strict';

var angular = require('angular');

angular.module('TwitchyControllers', [])
	.controller('ChannelsController', require('./channels'))
	.controller('HomeController', require('./home'))
	;

module.exports = angular.module('TwitchyControllers');
