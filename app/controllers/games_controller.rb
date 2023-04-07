class GamesController < ApplicationController
  skip_before_action :authorize, only: :index

  
  def index
render json: Game.all, status: :ok
  end
  
  def show
    game = Game.find(params[:id])
    render json: game, status: :ok

  end

  def create 
    # byebug
    game = Game.create!(permitted_params)
    render json: game, status: :created
    
  end

  private

  def permitted_params
    params.permit(:title, :genre, :platform, :image_url, :review)
  end
end
