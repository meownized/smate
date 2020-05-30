# frozen_string_literal: true

require __dir__ + '/data.rb'

def create_users
  4.times do |time|
    user ||= User.create(basic_info_m)
    user.avatar.attach(filename: "#{time+1}.jpg", io: File.open("db/images/avatars/#{time+1}.jpg", content_type: 'image/jpg'))

    6.times do |time|
      image = rand(1..15)
      user.images.attach(filename: "#{image}.jpg", io: File.open("db/images/users_photos/#{image}.jpg", content_type: 'image/jpg'))
    end
  end

  2.times do |time|
    user ||= User.create(basic_info_f)
    user.avatar.attach(filename: "#{time+1}.jpg", io: File.open("db/images/avatars/#{time+1}.jpg", content_type: 'image/jpg'))
    6.times do |time|
      image = rand(1..15)
      user.images.attach(filename: "#{image}.jpg", io: File.open("db/images/users_photos/#{image}.jpg", content_type: 'image/jpg'))
    end
  end
end

def basic_info_m
  {
    name: FFaker::NameRU.first_name_male,
    surname: SURNAME.sample,
    email: FFaker::Internet.email,
    password: '123456',
    sex: 'м',
    couple: true,
    smoke: true,
    animals: true,
    party: true,
    children: true,
    lgbtq: true,
    personal_info: ::PERSONAL_INFO.sample,
    age: rand(18..45)
  }
end

def basic_info_f
  {
    name: FFaker::NameRU.first_name_female,
    surname: ::SURNAME.sample,
    email: FFaker::Internet.email,
    password: '123456',
    sex: 'ж',
    couple: true,
    smoke: true,
    animals: true,
    party: true,
    children: true,
    lgbtq: true,
    personal_info: ::PERSONAL_INFO.sample,
    age: rand(18..45)
  }
end
