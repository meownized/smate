# frozen_string_literal: true

class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :messages, serializer: MessagesSerializer
end
