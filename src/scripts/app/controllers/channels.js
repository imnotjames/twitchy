module.exports =  [
	'$scope',
	'$routeParams',
	'$twitch',
	function ($scope, $routeParams, $twitch) {
		$scope.channels = {};

		var channels;

		if ($routeParams.channels) {
			channels = $routeParams.channels.split('/');
		} else {
			channels = [];
		}

		// Filter empty strings
		channels = channels.filter(
			function (e) {
				return e && e.length != 0;
			}
		);

		channels.map(function(channel) {
			$twitch
				.channel(channel)
				.success(function(data) {
					if (data.error || !data) {
						return;
					}

					$scope.channels[channel] = {};

					for (var key in data) {
						if (data.hasOwnProperty(key)) {
							$scope.channels[channel][key] = data[key];
						}
					}

					$twitch.stream(channel)
						.success(function(data) {
							if (data.error) {
								return;
							}

							$scope.channels[channel].stream = data.stream;
						});
				});

		});
	}
];
