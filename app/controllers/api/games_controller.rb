module Api
  class GamesController < ApplicationController
    def index
      render :json => Game.all, :include => :players
    end

    def create
      game = Game.create(game_params)
      render :json => game, :include => :players
    end

    private
    def game_params
      params.require(:game).permit(:title, :buy_in, :max_players)
    end
  end
end
