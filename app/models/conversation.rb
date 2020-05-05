# frozen_string_literal: true

class Conversation < ApplicationRecord
  # has_and_belongs_to_many :users
  belongs_to :user
  has_many :messages, dependent: :destroy
  # validates :title, presence: true
end
