angular.module('lottery')
  .controller('GameCtrl', [
    '$scope',
    function($scope) {
      $scope.headerTitle = "MicroLottery - Games"

      $scope.games = [
        {title: "Fish", maxPlayers: 5, buy_in: "$5.00", players: [{name: "Brian"}, {name: "Jeremy"}]},
        {title: "Bears", maxPlayers: 3, buy_in: "$15.00", players: [{name: "James"}, {name: "Josh"}]}
      ];

      $scope.registerForGame = function(game) {
        if(game.players.length < game.maxPlayers) {
          game.players.push({name: "Player"});
        }
      };
    }
  ]);
