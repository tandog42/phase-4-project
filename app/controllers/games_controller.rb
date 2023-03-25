class GamesController < ApplicationController
 
  def index
render json: Game.all, status: :ok
  end
  
  def show
    game = Game.find(params[:id])
    render json: game,include: :reviews, status: :ok

  end

  def create 
    game = Game.create!(permitted_params)
    render json: game, status: :created
  end

  private

  def permitted_params
    params.permit(:title, :genre, :platform, :image_url, :review)
  end
end
