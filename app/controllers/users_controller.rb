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


#   def username
#     param_num = params[:num].to_i
#     r = User.all.map do |s| 
#      if s.username.length > params[:num].to_i 
#       s.username
#      else 
#     { error:  ["Needs more Characters"] }
#     end
#   end
#   render json: r
# end

 private

 def permitted_params
params.permit(:username, :password, :review, :user)
end


end
