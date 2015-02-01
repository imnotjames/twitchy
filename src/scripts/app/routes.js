module.exports = function($routeProvider) {
	$routeProvider
		.when(
			'/',
			{
				templateUrl: 'partials/home.html',
				controller: 'HomeController'
			}
		)
		.when(
			'/channels/:channels*?',
			{
				templateUrl: 'partials/channels.html',
				controller: 'ChannelsController'
			}
		)
		.otherwise(
			{
				redirectTo: '/'
			}
		);
};
