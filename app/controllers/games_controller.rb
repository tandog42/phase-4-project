class GamesController < ApplicationController

  def index
render json: Game.all, status: :ok
  end
  
  def show
    game = Game.find(params[:id])
    render json: game, serializer: ReviewSerializer

  end
end
