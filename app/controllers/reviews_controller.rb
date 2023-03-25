class ReviewsController < ApplicationController
  
  def index
    render json: Review.all, status: :ok
end

def show
  review = Review.find(params[:id])
  render json: review

end

def create
review = Review.create(permitted_params)
render json: review
end

def update
  review = Review.find(params[:id])
  review.update(permitted_params)
  render json: review, status: :accepted
end


def destroy
review = Review.find(params[:id])
review.destroy
head :no_content

end

private

def permitted_params
params.permit(:body, :id, :user_id, :game_id, :review)

end
end
