module.exports = function($routeProvider) {
	$routeProvider
		.when(
			'/',
			{
				templateUrl: 'partials/home.html',
				controller: 'HomeController'
			}
		)
		.otherwise(
			{
				redirectTo: '/'
			}
		);
};
