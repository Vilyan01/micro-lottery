angular.module('lottery')
  .factory('games', [
    function() {
      var o = {
        games: [
          {title: "Fish", maxPlayers: 5, buy_in: "$5.00", players: [{name: "Brian"}, {name: "Jeremy"}]},
          {title: "Bears", maxPlayers: 3, buy_in: "$15.00", players: [{name: "James"}, {name: "Josh"}]}
        ]
      };
      return o;
    }
  ]);
