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
            picks: [],
            picksroles: []
        },
        {
            // red team
            name: '',
            score: 0,
            players: [],
            bans: [],
            picks: [],
            picksroles: []
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
        
        var output = '{{PicksAndBansS7';
        for (var i = 0, n = 1; i < $scope.teams.length; i++, n++) {
            output = output.concat('| team'+n+'=' + $scope.teams[i].name);
            output = output.concat('| team'+n+'score=' + $scope.teams[i].score);
        }
        output = output.concat('|winner=' + $scope.winner);
        output += "\n";
        for (var i = 0; i < 3; i++) {
            output = output.concat('| blueban'+(i+1)+'=' + $scope.teams[0].bans[i]);
            output = output.concat('| redban'+(i+1)+'=' + $scope.teams[1].bans[i]);
            output += "\n";
        }
        output = output.concat('| bluepick'+1+'=' + $scope.teams[0].picks[0]);
        output = output.concat('| bluepickrole'+1+'=' + $scope.teams[0].picksroles[0]);
        for (var i = 0; i < 2; i++) {
            output = output.concat('| redpick'+(i+1)+'=' + $scope.teams[0].picks[i]);
            output = output.concat('| redpickrole'+(i+1)+'=' + $scope.teams[0].picksroles[i]);
            output += "\n";
        }
        for (var i = 1; i <3; i++) {
            output = output.concat('| bluepick'+(i+1)+'=' + $scope.teams[0].picks[i]);
            output = output.concat('| bluepickrole'+(i+1)+'=' + $scope.teams[0].picksroles[i]);
            output += "\n";
        }
        output = output.concat('| redpick'+3+'=' + $scope.teams[0].picks[2]);
        output = output.concat('| redpickrole'+3+'=' + $scope.teams[0].picksroles[2]);
        output += "\n";
        for (var i = 3; i <5; i++) {
            output = output.concat('| blueban'+(i+1)+'=' + $scope.teams[0].bans[i]);
            output = output.concat('| redban'+(i+1)+'=' + $scope.teams[1].bans[i]);
            output += "\n";
        }
        output = output.concat('| redpick'+4+'=' + $scope.teams[0].picks[3]);
        output = output.concat('| redpickrole'+4+'=' + $scope.teams[0].picksroles[3]);
        output += "\n";
        for (var i = 3; i <5; i++) {
            output = output.concat('| bluepick'+(i+1)+'=' + $scope.teams[0].picks[i]);
            output = output.concat('| bluepickrole'+(i+1)+'=' + $scope.teams[0].picksroles[i]);
            output += "\n";
        }
        output = output.concat('| redpick'+5+'=' + $scope.teams[0].picks[4]);
        output = output.concat('| redpickrole'+5+'=' + $scope.teams[0].picksroles[4]);
        output += "\n}}";
        
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