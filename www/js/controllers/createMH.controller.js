angular
    .module('MatchHistoryApp')
    .controller('CreateMHCtrl', CreateMHCtrl)
    .directive('createMatchHistory', createMatchHistory);

function CreateMHCtrl($scope, $http) {
	
    $scope.playersPerTeam = [1,2,3,4,5];
    $scope.bansPerTeam = [1, 2, 3, 4, 5];

    $scope.teams = [
        {
            // blue team
            name: '',
            score: 0,
            players: [],
            bans: [],
            picks: []
        },
        {
            // red team
            name: '',
            score: 0,
            players: [],
            bans: [],
            picks: []
        }
    ];

    $scope.blueTeam = $scope.teams[0];
    $scope.redTeam = $scope.teams[1];
	
    $scope.output = '';

    $scope.generateOutput = function () {
        /*return "PicksAndBansS7 | team1= |team2= |team1score= |team2score= |winner= "
              +"|blueban1=      |redban1="
              +"|blueban2=      |redban2="
              +"|blueban3=      |redban3="
              +"|bluepick1=     |bluepick1role="
              +"                                            |redpick1=    |redpick1role="
              +"                                            |redpick2=    |redpick2role="
              +"|bluepick2=     |bluepick2role="
              +"|bluepick3=     |bluepick3role="
              +"                                            |redpick3=    |redpick3role="
              +"|blueban4=     |redban4="
              +"|blueban5=     |redban5="
              +"                                            |redpick4=    |redpick4role="
              +"|bluepick4=     |bluepick4role="
              +"|bluepick5=     |bluepick5role="
              +"                                            |redpick5=    |redpick5role="
            ;
        */
        var output = 'PicksAndBansS7';
        for (var i = 0, n = 1; i < $scope.teams.length; i++, n++) {
            output = output.concat('| team'+n+'=' + $scope.teams[i].name);
        }
        $scope.output = output;
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