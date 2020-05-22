# frozen_string_literal: true

require __dir__ + '/data.rb'

def create_flats
  create_flat(flat_subway: subway, pack: 1, rooms_count: 1)
  create_flat(flat_subway: subway, pack: 2, rooms_count: 2)
  create_flat(flat_subway: subway, pack: 3, rooms_count: 3)
  create_flat(flat_subway: subway, pack: 4, rooms_count: 2)

  puts "Созданы квартиры c названиями: #{Flat.all.pluck(:name)}"
end

def create_flat(flat_subway:, pack:, rooms_count:)
  user = User.find(pack)

  flat = Flat.create(
    name: ::FLAT_NAME.sample,
    price: rand(80_000..200_000).round(-3),
    subway: flat_subway,
    description: FFaker::LoremRU.sentence(word_count = 5),
    district: district(flat_subway),
    owner_id: user.id
  )

  3.times do
    flat.flat_attachments.create(
      image: image(pack)
    )
  end

  [
    flat.name,
    'Арендаторы и арендодатель'
  ].each do |title|
    flat.conversations.create(
      flat_id: flat.id,
      title: title
    )
  end

  flat.conversations.last.users << user

  rooms_count.times do
    room = Room.create(
      flat_id: flat.id
    )

    Rent.create(
      flat_id: flat.id,
      room_id: room.id
    )
  end
end

def subway
  file = File.open(File.join(File.dirname(__FILE__), '..', 'catalog', 'subway.json'))
  data = JSON.load file
  subway = data.sample
  subway['name']
end

def district(for_subway)
  minutes = [5, 10, 15, 20]
  district = "#{minutes.sample} минут"
  + "от #{for_subway}"
  + FFaker::AddressRU.street_address.to_s
end

def image(pack)
  File.open(Dir.glob(File.join(Rails.root, 'db/images', "flat_#{pack}_*.jpg")).sample)
end
