class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :username, :game_id

end