# frozen_string_literal: true

require 'ffaker'

5.times do
  User.create!(
    name: FFaker::NameRU.first_name,
    surname: FFaker::NameRU.last_name,
    email: FFaker::Internet.email,
    password: '123456'
  )
end

5.times do
  subways = %w[Сокол Войковская]
  district = "#{rand(80_000..200_000)} минут от #{subways.sample} #{FFaker::AddressRU.street_address}"
  image = [
    'db/images/flat1.jpg',
    'db/images/flat2.jpg',
    'db/images/flat3.jpg',
    'db/images/flat4.jpg',
    'db/images/flat5.jpg'
  ]
  name = ['Комната в трешке', 'Двушка на войковской', 'Арт-пространство', 'Комната для дизайнера']

  flat = Flat.create!(
    name: name.sample.to_s,
    price: rand(80_000..200_000),
    subway: subways.sample.to_s,
    description: FFaker::LoremRU.sentence(word_count = 5),
    district: district
  )

  4.times do
    flat.flat_attachments.create!(
      image: File.open(File.join(Rails.root, image.sample))
    )
  end
end

# 3.times do
#   Room.create!(
#     price: (15_000..40_000),
#     flat_id: 6
#   )
# end

# 3.times do
#   room = Flat.find(6).rooms.sample
#
#   Rent.create!(
#     user: User.all.sample,
#     flat_id: 6,
#     room_id: 10
#   )
# end
