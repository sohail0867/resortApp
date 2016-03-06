var app  = angular.module('app', []);
app.controller('MainController', ['$scope', '$http', function($scope, $http){
	$scope.submit = function(){
		$http.post('/customer', $scope.fields, {}).then(function(response){
			if(response.status === 200)
				$scope.status = 'Form Submitted Successfully';
		}, function(response){
			$scope.status = 'Error Submitting Form';
		});
	} 
}]);
