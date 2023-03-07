require "faker"


User.create(username: "tandog42", password: "tanner123")


20.times do
  Game.create(
    title: Faker::Game.title,
    genre: Faker::Game.genre,
    platform: Faker::Game.platform,
  )
  
end