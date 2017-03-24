angular
    .module('MatchHistoryApp')
    .controller('CreateMHCtrl', CreateMHCtrl)
    .directive('createMatchHistory', createMatchHistory);

function CreateMHCtrl($scope, $http) {
	
    $scope.playersPerTeam = [1,2,3,4,5];
	$scope.bansPerTeam    = [1,2,3,4,5];
	
	$scope.teamA = "tsm";
	$scope.teamB = "clg";
	
	$scope.blueBans = [];
	$scope.redBans = [];
	$scope.bluePicks = [];
	$scope.redPicks = [];
	
	$scope.output = $scope.teamA + $scope.teamB;

    $scope.toggleShow = function () {
		
    };

    //$scope.getCardsList = function () {
        //$http.get("...")
        //    .then(function (result) {
        //        
        //    }, function (result) {
        //        //some error
        //        console.log(result);
        //    });
    //};
};

function createMatchHistory() {
    return {
        restrict: 'E',
        templateUrl: 'templates/create-match-history.html',
        controller: 'CreateMHCtrl'
    }
};