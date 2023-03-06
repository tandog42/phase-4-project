class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body
  has_one :game
  has_one :user
end
