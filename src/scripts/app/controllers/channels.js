module.exports =  [
	'$scope',
	'$routeParams',
	'$twitch',
	function ($scope, $routeParams, $twitch) {
		$scope.channels = [];

		var channels = $routeParams.channels.split('/');

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

					var channel_id = $scope.channels.push({}) - 1;

					for (var key in data) {
						if (data.hasOwnProperty(key)) {
							$scope.channels[channel_id][key] = data[key];
						}
					}

					$twitch.stream(channel)
						.success(function(data) {
							if (data.error) {
								return;
							}

							$scope.channels[channel_id].stream = data.stream;
						});
				});

		});
	}
];
