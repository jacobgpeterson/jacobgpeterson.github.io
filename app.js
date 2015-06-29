var app = angular.module('personalSite', ['ngRoute', 'duScroll']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl:'/templates/home.html',
		controller:'homeCtrl'
	})
	.when('/pickup', {
		templateUrl:'/templates/pickup.html',
		controller:''
	})
	.when('/bitcurve', {
		templateUrl:'/templates/bitcurve.html',
	})
	.when('/shh', {
		templateUrl:'/templates/shh.html'
	})
	.when('/secret', {
		templateUrl:'/templates/secret.html'
	})
	.when('/wolverine', {
		templateUrl:'/templates/wolverine.html'
	})
	.when('/brodus', {
		templateUrl:'/templates/brodus.html'
	})
	.otherwise({
		redirectTo: '/home'
	})
})