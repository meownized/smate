# frozen_string_literal: true

require __dir__ + '/data.rb'

def create_users
  4.times do |time|
    user ||= User.create(basic_info)
    user.avatar.attach(filename: "#{time}.jpg", io: File.open("db/images/avatars/#{time}.jpg", content_type: 'image/jpg'))
  end
end

def basic_info
  {
    name: FFaker::NameRU.first_name,
    surname: FFaker::NameRU.last_name,
    email: FFaker::Internet.email,
    password: '123456',
    sex: ::SEX.sample,
    couple: true,
    smoke: true,
    animals: true,
    party: true,
    children: true,
    lgbtq: true
  }
end
