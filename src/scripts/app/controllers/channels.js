module.exports =  [
	'$scope',
	'$routeParams',
	'$twitch',
	'$q',
	function ($scope, $routeParams, $twitch, $q) {
		$scope.channels = {};

		var loadChannel = function(channel) {
			if (!channel || channel.length === 0) {
				// Channels must have a length.
				return;
			}

			// Fetch the channel and stream data in tandem since they
			// both key off of the channel identifier anyway
			var fetchChannelData = 	$twitch.channel(channel);
			var fetchStreamData = $twitch.stream(channel);

			$q.all([
				$twitch.channel(channel),
				$twitch.stream(channel)
			])
			.then(function (result) {
				if (!result || result.length != 2) {
					// For some reason these results came back weird..?
					return;
				}

				if (result[0].error) {
					// Error fetching channel data, abort!
					// This channel probably just doesn't exist.
					return;
				}

				var channelData = result[0].data;

				if (result[1].data) {
					// If the stream data doesn't load we don't need to fret.
					channelData.stream = result[1].data;
				}

				// Put the channel data into the scope
				$scope.channels[channel] = channelData;
			});

		};

		if ($routeParams.channels) {
			$routeParams.channels.split('/').map(loadChannel);
		}
	}
];
