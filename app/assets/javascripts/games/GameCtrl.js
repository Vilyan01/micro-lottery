angular.module('lottery')
  .controller('GameCtrl', [
    '$scope', 'games',
    function($scope, games) {
      $scope.headerTitle = "MicroLottery - Games"

      $scope.games = games.games;

      $scope.registerForGame = function(game) {
        if(game.players.length < game.max_players) {
          game.players.push({name: "Player"});
          if(game.players.length === game.max_players) {
            games.chooseWinner(game);
          }
        }
      };

      $scope.addGame = function() {
        if(!$scope.title || $scope.title === '') {return;}
        if(!$scope.max || $scope.max < 0) {return;}
        if(!$scope.buy_in || $scope.buy_in === '') {return;}
        games.add({title: $scope.title, max_players: $scope.max, buy_in: $scope.buy_in});
      }
    }
  ]);
