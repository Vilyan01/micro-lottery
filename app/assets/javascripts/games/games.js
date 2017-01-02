angular.module('lottery')
  .factory('games', [
    '$http',
    function($http) {
      var o = {
        games: []
      };

      o.getAll = function() {
        console.log("Getting games");
        return $http({
          method: 'GET',
          url: '/api/games.json'
        }).then(function successCallback(response) {
          console.log(response);
          angular.copy(response.data, o.games);
        }, function  errorCallback(response) {
          console.log("Error getting games");
        });
      };

      o.add = function(game) {
        console.log({game: game})
        return $http({
          method: 'POST',
          url: '/api/games.json',
          data: {game: game}
        }).then(function successCallback(response) {
          o.games.push(response.data);
        }, function errorCallback(response) {
          console.log("Error creating game");
        });
      };

      o.chooseWinner = function(game) {
        var winner = Math.floor(Math.random() * game.players.length);
        game.players[winner].name = game.players[winner].name + " - Winner";
      }

      return o;
    }
  ]);
