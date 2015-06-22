var app = angular.module('personalSite');

app.controller("homeCtrl", function($scope, $document){
	var container = angular.element(document.getElementById('container'));
    var section2 = angular.element(document.getElementById('section-2'));
    $scope.toTheTop = function() {
    	container.scrollTop(0, 5000);
    }
    $scope.toSection2 = function() {
      	container.scrollTo(section2, 0, 1000);
    }
})