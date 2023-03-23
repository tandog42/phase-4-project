class ReviewsController < ApplicationController
  skip_before_action :authorize, only: :create
  def index
    render json: Review.all, status: :ok
end

def show
  review = Review.find(params[:id])
  render json: review

end

def create
review = Review.create!(permitted_params)
render json: review, status: :created
end

def update
  review = Review.find(params[:id])
  Review.update(permitted_params)
  render json: review, status: :accepted
end


def destroy
review = Review.find(params[:id])
review.destroy
head :no_content

end

private

def permitted_params
params.permit(:body, :game_id, :user_id)

end
end
