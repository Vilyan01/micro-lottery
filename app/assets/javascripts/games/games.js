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
        }, function  errorCallback(respomse) {
          console.log("Error getting games");
        });
      };

      o.add = function(t, m, b) {
        o.games.push({title: t, max_players: m, buy_in: b, players:[]});
      }

      o.chooseWinner = function(game) {
        var winner = Math.floor(Math.random() * game.players.length);
        game.players[winner].name = game.players[winner].name + " - Winner";
      }

      return o;
    }
  ]);
