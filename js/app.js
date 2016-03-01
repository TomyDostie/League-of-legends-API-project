(function() {
	var app = angular.module('leagueProject', ['ngRoute', 'ngAnimate']);
	
	app.config(['$routeProvider', function($routeProvider){
	    $routeProvider
	        .when('/', {
	            template : ''
	        })
	        .otherwise({
	            redirectTo : '/'
	        });
	}]);
	
	app.controller('ExampleController', ['$scope','$http','$window','$location',function($scope,$http,$window,$location) {
	  $scope.master = {};

	  $scope.update = function(user) {

	    $scope.master = angular.copy(user);

	    //Get the summoner infos
	    $http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'+$scope.master.name+'?api_key=6c836041-52c1-4a82-9990-5f307d32e2bf')
		.success(function(obj, status, headers, config) {
			console.log("Entered");
		     $scope.datas = obj;
		     $scope.id = [];
		     angular.forEach($scope.datas,function(item) {
		     	$scope.id = item.id;
		     });
		     console.log($scope.id);

		     //$location.path("/profile");

		     //Get the mastery pages
		     $http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/'+$scope.id+'/masteries?api_key=6c836041-52c1-4a82-9990-5f307d32e2bf')
			.success(function(data1, status, headers, config) {
				console.log("Entered");
			     $scope.masteries = data1;
			     console.log(data1);
			})
			.error(function(error, status, headers, config) {
			     console.log(status);
			     console.log("Error occured");
			});

			//Get the rune pages
		     $http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/'+$scope.id+'/runes?api_key=6c836041-52c1-4a82-9990-5f307d32e2bf')
			.success(function(data2, status, headers, config) {
				console.log("Entered");
			     $scope.runes = data2;
			     console.log(data2);
			})
			.error(function(error, status, headers, config) {
			     console.log(status);
			     console.log("Error occured");
			});

			//Get the last roles pages
		     $http.get('https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/'+$scope.id+'/recent?api_key=6c836041-52c1-4a82-9990-5f307d32e2bf')
			.success(function(data3, status, headers, config) {
				 console.log("Entered");
			     $scope.games = data3;
			     console.log(data3);

			     
			     angular.forEach($scope.games,function(item) {
			     	var tempArr = [];
			     	angular.forEach(item,function(value) {
				     	console.log(value.teamId);
				     	tempArr.push = value.teamId;
				     });
			     	console.log(tempArr);
			     	
			     });
			     

			})
			.error(function(error, status, headers, config) {
			     console.log(status);
			     console.log("Error occured");
			});

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