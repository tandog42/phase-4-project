class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :username, :game
  belongs_to :game
end
