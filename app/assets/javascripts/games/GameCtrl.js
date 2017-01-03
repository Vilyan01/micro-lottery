angular.module('lottery')
  .controller('GameCtrl', [
    '$scope', 'games',
    function($scope, games) {
      $scope.headerTitle = "MicroLottery - Games"

      $scope.games = games.games;

      $scope.registerForGame = function(game, username) {
        if(!username || username === "") {return;}
        if(game.players.length < game.max_players) {
          game.players.push({name: username});
          if(game.players.length === game.max_players) {
            games.chooseWinner(game);
          }
        }
      };

      $scope.leftTable = function(game) {
        var left = [];
        for(var i = 0; i < game.players.length; i++) {
          if(i % 2 === 0) {
            left.push(game.players[i]);
          }
        }
        return left;
      }

      $scope.rightTable = function(game) {
        var right = [];
        for(var i = 0; i < game.players.length; i++) {
          if(i % 2 === 1) {
            right.push(game.players[i]);
          }
        }
        return right;
      }

      $scope.addGame = function() {
        if(!$scope.title || $scope.title === '') {return;}
        if(!$scope.max || $scope.max < 0) {return;}
        if(!$scope.buy_in || $scope.buy_in === '') {return;}
        games.add({title: $scope.title, max_players: $scope.max, buy_in: $scope.buy_in, description: $scope.description});
      }
    }
  ]);
