angular.module('lottery')
  .factory('games', [
    function() {
      var o = {
        games: [
          {title: "Fish", maxPlayers: 5, buy_in: "$5.00", players: [{name: "Brian"}, {name: "Jeremy"}]},
          {title: "Bears", maxPlayers: 3, buy_in: "$15.00", players: [{name: "James"}, {name: "Josh"}]}
        ]
      };

      o.add = function(t, m, b) {
        o.games.push({title: t, maxPlayers: m, buy_in: b, players:[]});
      }

      o.chooseWinner = function(game) {
        var winner = Math.floor(Math.random() * game.players.length);
        game.players[winner].name = game.players[winner].name + " - Winner";
      }

      return o;
    }
  ]);
