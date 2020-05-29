# frozen_string_literal: true

class FlatSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :subway

  has_many :conversations, serializer: ConversationsSerializer
end
