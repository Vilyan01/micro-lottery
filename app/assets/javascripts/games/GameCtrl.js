angular.module('lottery')
  .controller('GameCtrl', [
    '$scope', 'games',
    function($scope, games) {
      $scope.headerTitle = "MicroLottery - Games"

      $scope.games = games.games;

      $scope.registerForGame = function(game) {
        if(game.players.length < game.maxPlayers) {
          game.players.push({name: "Player"});
        }
      };

      $scope.addGame = function() {
        console.log("Adding a game");
        console.log($scope.title);
        console.log($scope.max);
        console.log($scope.buy_in);
        if(!$scope.title || $scope.title === '') {return;}
        if(!$scope.max || $scope.max < 0) {return;}
        if(!$scope.buy_in || $scope.buy_in === '') {return;}
        games.add($scope.title, $scope.max, $scope.buy_in);
      }
    }
  ]);
