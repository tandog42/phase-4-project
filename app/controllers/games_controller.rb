class GamesController < ApplicationController
  class GamesController < ApplicationController
    skip_before_action :authorize, only: [:index, :filtered_games]
  
    
    def index
  render json: Game.all, status: :ok
    end
  
  
  # # create a custom route that displays all the games that have "P" in the title
  
  # def game_title
  # games = Game.all
  # filtered_games = games.filter { |g| g.title.include?("P")}
  # render json: filtered_games
  # end
  
  #  post route that takes in an argument n (a number)
  #   and gives me all the games that have more than n reviews.
  #    render json of the game objects or
  #     an error message saying "no games were found with more than n reviews!", 
  #     where n has been replaced by the number.
  
  def filtered_games
  byebug
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
  
end
