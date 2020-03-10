class User < ApplicationRecord
  has_many :rents
  has_many :flats, through: :rents
  has_many :rooms, through: :rents

  has_and_belongs_to_many :conversations
  has_many :messages
  has_many :message_statuses
end
