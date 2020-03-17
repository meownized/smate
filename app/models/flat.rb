class Flat < ActiveRecord::Base
  has_many :rents
  has_many :users, through: :rents
  has_many :rooms, through: :rents

  has_many :conversations

  has_many :flat_attachments, dependent: :destroy
  accepts_nested_attributes_for :flat_attachments, allow_destroy: true
end
