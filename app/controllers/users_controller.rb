class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

def show 
 user = User.find(session[:user_id])
 render json: user, status: :ok
end

def create
        user = User.create!(permitted_params)
            session[:user_id] = user.id 
            render json: user, status: :ok
   
    end



 private

 def permitted_params
params.permit(:username, :password)
end

def render_unprocessable_entity_response(err)
  render json: { errors: err.record.errors}, status: :unprocessable_entity
end
end
