module Api
  class GamesController < ApplicationController
    def index
      render :json => Game.all, :include => :players
    end
  end
end
