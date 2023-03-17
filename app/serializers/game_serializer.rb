class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :platform, :image_url, :reviews
  # has_many :reviews

end
