class Message < ApplicationRecord
  belongs_to :user
  belongs_to :conversation

  # has_many :message_statuses
  validates :body, presence: true, length: {minimum: 1, maximum: 1000}
end
