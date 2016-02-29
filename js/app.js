(function() {
	var app = angular.module('leagueProject', []);

	app.controller('ExampleController', ['$scope','$http','$window',function($scope,$http,$window) {
	  $scope.master = {};

	  $scope.update = function(user) {
	    $scope.master = angular.copy(user);
	    $http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'+$scope.master.name+'?api_key=6c836041-52c1-4a82-9990-5f307d32e2bf')
		.success(function(data, status, headers, config) {
			console.log("Entered");
		     $scope.datas = data;
		})
		.error(function(error, status, headers, config) {
		     console.log(status);
		     console.log("Error occured");
		});

		$scope.reset();
	   };

	  $scope.reset = function(form) {
	    if (form) {
	      form.$setPristine();
	      form.$setUntouched();
	    }
	    $scope.user = angular.copy($scope.master);
	  };

	  $scope.reset();
	}]);
})();