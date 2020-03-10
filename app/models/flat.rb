class Flat < ActiveRecord::Base
  has_many :rents
  has_many :users, through: :rents
  has_many :rooms, through: :rents

  has_many :conversations

  has_many :flat_attachments
  accepts_nested_attributes_for :flat_attachments
end
