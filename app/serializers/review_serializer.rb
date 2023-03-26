class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :username
belongs_to :game
end