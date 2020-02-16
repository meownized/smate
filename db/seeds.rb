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

5.times do
  Room.create!(
    price: (15_000..40_000)
  )
end

50.times do
  Rent.create!(
    user: User.all.sample,
    flat: Flat.all.sample,
    room: Room.all.sample
  )
end
