require 'ffaker'

10.times do
  User.create!(
    name: FFaker::Name.first_name
  )
end

5.times do
  Flat.create!(
    price: rand(80_000..200_000)
  )
end

3.times do
  Room.create!(
    price: (15_000..40_000),
    flat_id: 6
  )
end

3.times do
  room = Flat.find(6).rooms.sample

  Rent.create!(
    user: User.all.sample,
    flat_id: 6,
    room_id: 10
  )
end
