class GamesController < ApplicationController

  def index
render json: Game.all, status: :ok
  end
  
  def show
    game = Game.find(params[:id])
    render json: game

  end
end
