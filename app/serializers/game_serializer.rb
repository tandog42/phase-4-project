class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating, :year_released
end
