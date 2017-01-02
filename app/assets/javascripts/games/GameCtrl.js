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
    }
  ]);
