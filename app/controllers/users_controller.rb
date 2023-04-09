class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :fun_reviews]

  def index
    render json: User.all
  end

 





def fun_reviews
user = User.find(params[:id])
user = user.reviews
 lol = user.filter{ |a| a.body.include?("Great")}
 if lol != []
 render json: lol
else
  render json: {error: "Nothing Matches"}
end
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
params.permit(:username, :password, :review, :user)
end


end
