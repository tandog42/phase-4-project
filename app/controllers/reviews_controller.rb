class ReviewsController < ApplicationController
  def index
    render json: Review.all, status: :ok
end

def show
    review = Review.find(params[:id])
    render json: review, status: :ok
end

end
