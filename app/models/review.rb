class Review < ApplicationRecord
  belongs_to :game
  belongs_to :user


  def username
    self.user.username
    # User.find(self.user_id).username
  end
end
