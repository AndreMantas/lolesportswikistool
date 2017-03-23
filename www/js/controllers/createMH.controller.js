angular
    .module('MatchHistoryApp')
    .controller('CreateMHCtrl', CreateMHCtrl)
    .directive('createMatchHistory', createMatchHistory);

function CreateMHCtrl($scope, $http) {
    $scope.playersPerTeam = 5;

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