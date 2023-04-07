class Game < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

   validates :image_url, format: {with: /\.(png|jpg)\Z/i}
  validates :title, presence: true
  validates :genre, presence: true
  validates :platform, presence:true
end
