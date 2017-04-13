angular
    .module('MatchHistoryApp')
    .controller('CreateMHCtrl', CreateMHCtrl)
    .directive('createMatchHistory', createMatchHistory);

function CreateMHCtrl($scope, $http) {

    $scope.teamsPerGame = 2;
    $scope.playersPerTeam = 5;
    $scope.bansPerTeam = 5;

    $scope.range = function (n) {
        var result = [];
        for (var i = 1; i <= n; i++) {
            result.push(i);
        }
        return result;  
    };

    $scope.game = {
        teams: [],
        winner: '1', // team 1 is winner by default
    };

    $scope.teams = $scope.game.teams;

    // init all team variables for all teams
    for (var i = 0; i < $scope.teamsPerGame; i++) {
        $scope.teams[i] = {
            name: '',
            score: 0,
            bans: [],
            picks: [],
        };
        for (var j = 0; j < $scope.bansPerTeam; j++) {
            $scope.teams[i].bans[j] = '';
        }
        for (var j = 0; j < $scope.playersPerTeam; j++) {
            $scope.teams[i].picks[j] = {
                champ: '',
                role: '',
                // add player names here if necessary
            };
        }
    }

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
        output = output.concat('|winner=' + $scope.game.winner);
        output += "\n";
        for (var i = 0; i < 3; i++) {
            output = output.concat('| blueban'+(i+1)+'=' + $scope.teams[0].bans[i]);
            output = output.concat('| redban'+(i+1)+'=' + $scope.teams[1].bans[i]);
            output += "\n";
        }
        output = output.concat('| bluepick' + 1 + '=' + $scope.teams[0].picks[0].champ);
        output = output.concat('| bluepick' + 1 + 'role=' + $scope.teams[0].picks[0].role);
        output += "\n";
        for (var i = 0; i < 2; i++) {
            output = output.concat('| redpick' + (i + 1) + '=' + $scope.teams[1].picks[i].champ);
            output = output.concat('| redpick' + (i + 1) + 'role=' + $scope.teams[1].picks[i].role);
            output += "\n";
        }
        for (var i = 1; i <3; i++) {
            output = output.concat('| bluepick' + (i + 1) + '=' + $scope.teams[0].picks[i].champ);
            output = output.concat('| bluepick' + (i + 1) + 'role=' + $scope.teams[0].picks[i].role);
            output += "\n";
        }
        output = output.concat('| redpick' + 3 + '=' + $scope.teams[1].picks[2].champ);
        output = output.concat('| redpick' + 3 + 'role=' + $scope.teams[1].picks[2].role);
        output += "\n";
        for (var i = 3; i <5; i++) {
            output = output.concat('| blueban'+(i+1)+'=' + $scope.teams[0].bans[i]);
            output = output.concat('| redban'+(i+1)+'=' + $scope.teams[1].bans[i]);
            output += "\n";
        }
        output = output.concat('| redpick' + 4 + '=' + $scope.teams[1].picks[3].champ);
        output = output.concat('| redpick' + 4 + 'role=' + $scope.teams[1].picks[3].role);
        output += "\n";
        for (var i = 3; i <5; i++) {
            output = output.concat('| bluepick' + (i + 1) + '=' + $scope.teams[0].picks[i].champ);
            output = output.concat('| bluepick' + (i + 1) + 'role=' + $scope.teams[0].picks[i].role);
            output += "\n";
        }
        output = output.concat('| redpick' + 5 + '=' + $scope.teams[1].picks[4].champ);
        output = output.concat('| redpick' + 5 + 'role=' + $scope.teams[1].picks[4].role);
        output += "\n}}";
        
        $scope.output = output;
    };
    
    $scope.clearOutput = function() {
        $scope.output = "";
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
