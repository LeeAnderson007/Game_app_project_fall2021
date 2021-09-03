# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"

catagories = ["food", "travel", "misc"]

10.times do |i|
  Game.create(
    name: Faker::Hacker.abbreviation,
    description: Faker::Hacker.say_something_smart,
    category: catagories.sample,
    likes: g,
  )
end