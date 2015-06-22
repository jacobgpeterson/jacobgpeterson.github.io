var app = angular.module('personalSite', ['ngRoute', 'duScroll']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl:'/templates/home.html',
		controller:'homeCtrl'
	})
	.when('/pickup', {
		templateUrl:'/templates/pickup.html',
		controller:'pickupCtrl'
	})
	.otherwise({
		redirectTo: '/home'
	})
})