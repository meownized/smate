class Flat < ApplicationRecord
  has_many :rents
  has_many :users, through: :rents
  has_many :rooms, through: :rents

  has_many :conversations
end
