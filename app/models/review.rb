class Review < ApplicationRecord
  belongs_to :game
  belongs_to :user

  validates :body, presence: true, length: {maximum: 250}

  def game_id
self.game.id
  end

  def username
    self.user.username
    # User.find(self.user_id).username
  end
end
