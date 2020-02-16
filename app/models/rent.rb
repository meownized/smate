class Rent < ApplicationRecord
  belongs_to :user
  belongs_to :flat
  belongs_to :room
end
