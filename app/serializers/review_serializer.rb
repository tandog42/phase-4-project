class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :username, :game

  has_one :user
end
