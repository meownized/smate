class Room < ApplicationRecord
  has_many :rents
  belongs_to :flat
  has_many :users, through: :rents

  has_many :flat_attachment
end
