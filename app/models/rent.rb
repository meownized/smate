class Rent < ApplicationRecord
  belongs_to :user, required: false
  belongs_to :flat
  belongs_to :room
end
