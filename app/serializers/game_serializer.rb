class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :platform
end
