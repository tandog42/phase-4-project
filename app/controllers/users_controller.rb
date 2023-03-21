class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    render json: User.all
  end
  def create
    user = User.create!(permitted_params)
    session[:user_id] = user.id 
    render json: user, status: :created
    
  end
  
  def show 
   render json: @current_user
  end


 private

 def permitted_params
params.permit(:username, :password)
end


end
