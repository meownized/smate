# frozen_string_literal: true

class MessageStatus < ApplicationRecord
  belongs_to :message
  belongs_to :user
end
