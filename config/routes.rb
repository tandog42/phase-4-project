Rails.application.routes.draw do
  resources :users, only: [:index, :create, :show]
  resources :games, only: [:index, :show, :create]
  resources :reviews
  
 

get "/users/:id/fun-reviews", to: "users#fun_reviews"

post "/filtered-games", to: "games#filtered_games"



post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"
get "/me", to: "users#show"

# make dynamic rout "/users/:id/fun-reviews" 
# render json all reviews that belong to users id in params that has the word fun in the body of a review 

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


