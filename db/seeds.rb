require "faker"


 u1 = User.create(username: "tandog42", password: "tanner123")
 u2 = User.create(username: "tan123", password: "123")
 u3 = User.create(username: "hello123", password: "1123")


  g1 = Game.create(
    title: "The Legend of Zelda",
    genre: Faker::Game.genre,
    platform: Faker::Game.platform,
    image_url: "https://images.unsplash.com/photo-1642049671765-4e165896853a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
  )
  g2 = Game.create(
    title: "Call of Duty MW",
    genre: Faker::Game.genre,
    platform: Faker::Game.platform,
    image_url:"https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1057&q=80"
  )
  g3 = Game.create(
    title: "Super Mario",
    genre: Faker::Game.genre,
    platform: Faker::Game.platform,
    image_url:"https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  )
  g4 = Game.create(
    title: "PackMan",
    genre: Faker::Game.genre,
    platform: Faker::Game.platform,
    image_url:"https://images.unsplash.com/photo-1579309401389-a2476dddf3d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  )
  g5 = Game.create(
    title: "Fifa 21",
    genre: Faker::Game.genre,
    platform: Faker::Game.platform,
    image_url:"https://images.unsplash.com/photo-1606490102015-697a49636e32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  )
  g6 = Game.create(
    title: "Pinball",
    genre: Faker::Game.genre,
    platform: Faker::Game.platform,
    image_url:"https://images.unsplash.com/photo-1567304529193-acc92518efcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
  )
  g7 = Game.create(
    title: "Chess",
    genre: Faker::Game.genre,
    platform: Faker::Game.platform,
    image_url:"https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80"
  )
  g8 = Game.create(
    title: "Tabletop Simulator",
    genre: Faker::Game.genre,
    platform: Faker::Game.platform,
    image_url:"https://images.unsplash.com/photo-1547638375-ebf04735d792?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  )
  g9 = Game.create(
    title: "Pokemon Go!",
    genre: Faker::Game.genre,
    platform: Faker::Game.platform,
    image_url:"https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
  )
  g10 = Game.create(
    title: "Fortnite",
    genre: Faker::Game.genre,
    platform: Faker::Game.platform,
    image_url:"https://images.unsplash.com/photo-1589241062272-c0a000072dfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  )


 Review.create(
  game_id: g1.id,
  user_id: u1.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )
  

 Review.create(
  game_id: g1.id,
  user_id: u2.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g2.id,
  user_id: u2.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g2.id,
  user_id: u3.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g3.id,
  user_id: u1.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g4.id,
  user_id: u1.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g4.id,
  user_id: u3.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g5.id,
  user_id: u1.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g5.id,
  user_id: u2.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g5.id,
  user_id: u3.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g6.id,
  user_id: u3.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g6.id,
  user_id: u2.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g7.id,
  user_id: u1.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g7.id,
  user_id: u3.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g8.id,
  user_id: u1.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g8.id,
  user_id: u2.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g8.id,
  user_id: u3.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g9.id,
  user_id: u3.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )

 Review.create(
  game_id: g10.id,
  user_id: u2.id,
  body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
  )
  Review.create(
    game_id: g10.id,
    user_id: u1.id,
    body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
    )
    Review.create(
      game_id: g10.id,
      user_id: u3.id,
      body: Faker::Lorem.sentence(word_count: 4, supplemental: false, random_words_to_add: 10)
      )

